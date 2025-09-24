"use client";

import React from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Heritage Theme System
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Experience our three carefully crafted themes designed for heritage
            conservation, professional surveying, and digital documentation
            services.
          </p>
        </div>

        {/* Theme Switcher */}
        <div className="mb-12">
          <ThemeSwitcher />
        </div>

        {/* Theme Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Color Palette */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              Color Palette
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-text-secondary mb-2">
                  Primary Colors
                </h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg border border-border-light"></div>
                  <div className="w-12 h-12 bg-primary-600 rounded-lg border border-border-light"></div>
                  <div className="w-12 h-12 bg-primary-700 rounded-lg border border-border-light"></div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-text-secondary mb-2">
                  Secondary Colors
                </h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg border border-border-light"></div>
                  <div className="w-12 h-12 bg-secondary-600 rounded-lg border border-border-light"></div>
                  <div className="w-12 h-12 bg-secondary-700 rounded-lg border border-border-light"></div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-text-secondary mb-2">
                  Neutral Colors
                </h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-neutral-300 rounded-lg border border-border-light"></div>
                  <div className="w-12 h-12 bg-neutral-500 rounded-lg border border-border-light"></div>
                  <div className="w-12 h-12 bg-neutral-700 rounded-lg border border-border-light"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Typography */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              Typography
            </h2>
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-text-primary">
                  Heading 1
                </h1>
                <p className="text-sm text-text-secondary">
                  Large headings for main titles
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-text-primary">
                  Heading 2
                </h2>
                <p className="text-sm text-text-secondary">Section headings</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-primary">
                  Heading 3
                </h3>
                <p className="text-sm text-text-secondary">
                  Subsection headings
                </p>
              </div>
              <div>
                <p className="text-base text-text-primary">
                  Body text for paragraphs and general content. This theme is
                  designed to be professional, trustworthy, and respectful to
                  heritage conservation values.
                </p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">
                  Secondary text for captions, metadata, and supporting
                  information.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Component Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6 text-center">
            Component Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Buttons */}
            <Card className="p-6">
              <h3 className="text-lg font-medium text-text-primary mb-4">
                Buttons
              </h3>
              <div className="space-y-3">
                <Button className="w-full">Primary Button</Button>
                <Button variant="secondary" className="w-full">
                  Secondary Button
                </Button>
                <Button variant="outline" className="w-full">
                  Outline Button
                </Button>
              </div>
            </Card>

            {/* Cards */}
            <Card className="p-6">
              <h3 className="text-lg font-medium text-text-primary mb-4">
                Cards
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-bg-secondary rounded-lg border border-border-light">
                  <h4 className="font-medium text-text-primary">Card Title</h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Card description
                  </p>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <h4 className="font-medium text-primary-800">
                    Highlighted Card
                  </h4>
                  <p className="text-sm text-primary-600 mt-1">
                    With primary accent
                  </p>
                </div>
              </div>
            </Card>

            {/* Status Indicators */}
            <Card className="p-6">
              <h3 className="text-lg font-medium text-text-primary mb-4">
                Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  <span className="text-sm text-text-primary">Success</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                  <span className="text-sm text-text-primary">Warning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error-500 rounded-full"></div>
                  <span className="text-sm text-text-primary">Error</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-info-500 rounded-full"></div>
                  <span className="text-sm text-text-primary">Info</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Heritage Values */}
        <div className="text-center">
          <Card className="p-8 bg-bg-secondary">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Heritage Conservation Values
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Our themes are carefully crafted to reflect the values of heritage
              conservation: respect for tradition, professional excellence, and
              a deep appreciation for the historical significance of the work we
              do. Each color palette tells a story of preservation, accuracy,
              and reverence for the past.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
