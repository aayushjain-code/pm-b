"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ImageTestPage() {
  const [imageStatus, setImageStatus] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  const images = Array.from({ length: 36 }, (_, i) => ({
    id: `image-${String(i + 1).padStart(2, "0")}.jpeg`,
    src: `/images/image-${String(i + 1).padStart(2, "0")}.jpeg`,
  }));

  useEffect(() => {
    const checkImages = async () => {
      const status: Record<string, boolean> = {};

      for (const image of images) {
        try {
          const response = await fetch(image.src, { method: "HEAD" });
          status[image.id] = response.ok;
        } catch (error) {
          status[image.id] = false;
        }
      }

      setImageStatus(status);
      setLoading(false);
    };

    checkImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-text-secondary">Checking images...</p>
        </div>
      </div>
    );
  }

  const loadedImages = Object.values(imageStatus).filter(Boolean).length;
  const totalImages = images.length;

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Image Loading Test
          </h1>
          <p className="text-text-secondary">
            {loadedImages} of {totalImages} images loaded successfully
          </p>
          <div className="w-full bg-neutral-200 rounded-full h-2 mt-4">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(loadedImages / totalImages) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className={`p-4 rounded-lg border-2 ${
                imageStatus[image.id]
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
              }`}
            >
              <div className="aspect-square mb-2">
                <img
                  src={image.src}
                  alt={image.id}
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              <p className="text-xs text-center font-mono">{image.id}</p>
              <p
                className={`text-xs text-center ${
                  imageStatus[image.id] ? "text-green-600" : "text-red-600"
                }`}
              >
                {imageStatus[image.id] ? "✓ Loaded" : "✗ Failed"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
