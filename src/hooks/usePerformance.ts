"use client";

import { useEffect, useState, useCallback } from "react";

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if Performance Observer is supported
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      setIsSupported(true);
      measurePerformance();
    }
  }, []);

  const measurePerformance = useCallback(() => {
    if (typeof window === "undefined" || !("performance" in window)) {
      return;
    }

    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    if (!navigation) return;

    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const firstContentfulPaint =
      performance.getEntriesByName("first-contentful-paint")[0]?.startTime || 0;
    const largestContentfulPaint =
      performance.getEntriesByType("largest-contentful-paint")[0]?.startTime ||
      0;

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "measure") {
          if (entry.name === "first-input-delay") {
            setMetrics(
              (prev) =>
                ({
                  ...prev,
                  firstInputDelay: entry.startTime,
                } as PerformanceMetrics)
            );
          }
        }
      }
    });

    observer.observe({ entryTypes: ["measure"] });

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (
          entry.entryType === "layout-shift" &&
          !(entry as any).hadRecentInput
        ) {
          clsValue += (entry as any).value;
        }
      }
    });

    clsObserver.observe({ entryTypes: ["layout-shift"] });

    // Calculate Time to Interactive
    const timeToInteractive =
      navigation.domContentLoadedEventEnd - navigation.navigationStart;

    setMetrics({
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay: 0, // Will be updated by observer
      cumulativeLayoutShift: clsValue,
      timeToInteractive,
    });

    // Cleanup
    return () => {
      observer.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const logMetrics = useCallback(() => {
    if (metrics) {
      console.group("🚀 Performance Metrics");
      console.log(`Load Time: ${metrics.loadTime.toFixed(2)}ms`);
      console.log(
        `First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms`
      );
      console.log(
        `Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(
          2
        )}ms`
      );
      console.log(`First Input Delay: ${metrics.firstInputDelay.toFixed(2)}ms`);
      console.log(
        `Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(4)}`
      );
      console.log(
        `Time to Interactive: ${metrics.timeToInteractive.toFixed(2)}ms`
      );
      console.groupEnd();
    }
  }, [metrics]);

  const getPerformanceScore = useCallback(() => {
    if (!metrics) return 0;

    let score = 100;

    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint > 3000) score -= 30;
    else if (metrics.firstContentfulPaint > 1800) score -= 20;
    else if (metrics.firstContentfulPaint > 1000) score -= 10;

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint > 4000) score -= 30;
    else if (metrics.largestContentfulPaint > 2500) score -= 20;
    else if (metrics.largestContentfulPaint > 1200) score -= 10;

    // FID scoring (0-100)
    if (metrics.firstInputDelay > 300) score -= 20;
    else if (metrics.firstInputDelay > 100) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  return {
    metrics,
    isSupported,
    logMetrics,
    getPerformanceScore,
  };
};

// Hook for measuring component render performance
export const useRenderPerformance = (componentName: string) => {
  const [renderTime, setRenderTime] = useState<number>(0);

  useEffect(() => {
    const start = performance.now();

    return () => {
      const end = performance.now();
      const duration = end - start;
      setRenderTime(duration);

      if (process.env.NODE_ENV === "development") {
        console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
      }
    };
  }, [componentName]);

  return renderTime;
};

// Hook for measuring API call performance
export const useApiPerformance = () => {
  const [apiMetrics, setApiMetrics] = useState<Record<string, number>>({});

  const measureApiCall = useCallback(
    async <T>(apiName: string, apiCall: () => Promise<T>): Promise<T> => {
      const start = performance.now();

      try {
        const result = await apiCall();
        const end = performance.now();
        const duration = end - start;

        setApiMetrics((prev) => ({
          ...prev,
          [apiName]: duration,
        }));

        if (process.env.NODE_ENV === "development") {
          console.log(`${apiName} API call: ${duration.toFixed(2)}ms`);
        }

        return result;
      } catch (error) {
        const end = performance.now();
        const duration = end - start;

        console.error(
          `${apiName} API call failed after ${duration.toFixed(2)}ms:`,
          error
        );
        throw error;
      }
    },
    []
  );

  return { apiMetrics, measureApiCall };
};


