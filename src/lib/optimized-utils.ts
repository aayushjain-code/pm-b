import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Optimized class name utility with better performance
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Debounce function for performance optimization
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Memoization utility for expensive calculations
export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args) as ReturnType<T>;
    cache.set(key, result);
    return result;
  }) as T;
}

// Image optimization utilities
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  height?: number,
  quality: number = 75
): string {
  if (src.startsWith("http")) {
    return src;
  }

  const params = new URLSearchParams();
  if (width) params.set("w", width.toString());
  if (height) params.set("h", height.toString());
  params.set("q", quality.toString());

  return `/api/image?src=${encodeURIComponent(src)}&${params.toString()}`;
}

// URL validation utility
export function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Email validation utility
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone number validation utility
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// Format phone number utility
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);

  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`;
  }

  return phone;
}

// Format currency utility
export function formatCurrency(
  amount: number,
  currency: string = "INR",
  locale: string = "en-IN"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

// Format date utility
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  locale: string = "en-IN"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

// Generate unique ID utility
export function generateId(prefix: string = "id"): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

// Deep clone utility
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as T;
  }

  if (typeof obj === "object") {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }

  return obj;
}

// Safe JSON parse utility
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

// Local storage utilities with error handling
export const storage = {
  get: <T>(key: string, fallback: T): T => {
    if (typeof window === "undefined") return fallback;

    try {
      const item = localStorage.getItem(key);
      return item ? safeJsonParse(item, fallback) : fallback;
    } catch {
      return fallback;
    }
  },

  set: (key: string, value: unknown): boolean => {
    if (typeof window === "undefined") return false;

    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove: (key: string): boolean => {
    if (typeof window === "undefined") return false;

    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};

// Intersection Observer utility for lazy loading
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  });
}

// Performance measurement utility
export function measurePerformance<T>(name: string, fn: () => T): T {
  if (typeof window === "undefined" || !("performance" in window)) {
    return fn();
  }

  const start = performance.now();
  const result = fn();
  const end = performance.now();

  console.log(`${name} took ${end - start} milliseconds`);
  return result;
}

// Retry utility for API calls
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (attempt === maxAttempts) {
        throw lastError;
      }

      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError!;
}
