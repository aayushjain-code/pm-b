# Heritage Theme System

A comprehensive theme system designed for heritage conservation, professional surveying, and digital documentation services. The system provides three carefully crafted themes that reflect modern, conservative, and professional values while respecting heritage traditions.

## Available Themes

### 1. Heritage Earth (Default)

- **Primary**: Terracotta (#e67e22)
- **Secondary**: Indigo (#6366f1)
- **Neutral**: Stone Grey
- **Background**: Cream (#fefcf8)
- **Description**: Warm, earthy tones that evoke traditional craftsmanship and natural materials

### 2. Conservative Modern

- **Primary**: Slate Blue (#64748b)
- **Secondary**: Saffron (#f59e0b)
- **Neutral**: Warm Grey
- **Background**: Ivory (#fefdf8)
- **Description**: Professional and trustworthy with subtle warmth

### 3. Minimal Professional

- **Primary**: Deep Green (#22c55e)
- **Secondary**: Taupe (#78716c)
- **Neutral**: Charcoal
- **Background**: White (#ffffff)
- **Description**: Clean, modern, and highly professional

## Usage

### Theme Provider

Wrap your application with the `ThemeProvider`:

```tsx
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

### Theme Switcher Component

Use the `ThemeSwitcher` component to allow users to change themes:

```tsx
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function SettingsPage() {
  return (
    <div>
      <h1>Theme Settings</h1>
      <ThemeSwitcher />
    </div>
  );
}
```

### Using Theme Colors in Components

Access theme colors through CSS custom properties or Tailwind classes:

```tsx
// Using Tailwind classes
<div className="bg-bg-primary text-text-primary border-border-light">
  Content
</div>

// Using CSS custom properties
<div style={{
  backgroundColor: 'var(--color-bg-primary)',
  color: 'var(--color-text-primary)'
}}>
  Content
</div>
```

### Programmatic Theme Control

Use the `useTheme` hook for programmatic theme control:

```tsx
import { useTheme } from "@/components/ThemeProvider";

export default function MyComponent() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <button onClick={() => setTheme("conservative-modern")}>
        Switch to Conservative Modern
      </button>
    </div>
  );
}
```

## Color Tokens

### Primary Colors

- `primary-50` to `primary-900`: Main brand colors
- `secondary-50` to `secondary-900`: Accent colors
- `neutral-50` to `neutral-900`: Grayscale colors

### Background Colors

- `bg-primary`: Main background
- `bg-secondary`: Secondary background
- `bg-tertiary`: Tertiary background
- `bg-dark`: Dark background

### Text Colors

- `text-primary`: Primary text
- `text-secondary`: Secondary text
- `text-tertiary`: Tertiary text
- `text-inverse`: Inverse text (for dark backgrounds)
- `text-muted`: Muted text

### Border Colors

- `border-light`: Light borders
- `border-medium`: Medium borders
- `border-dark`: Dark borders

### Semantic Colors

- `success-*`: Success states
- `warning-*`: Warning states
- `error-*`: Error states
- `info-*`: Information states

## Theme Switching

Themes are switched by setting the `data-theme` attribute on the document root:

```javascript
// Switch to Conservative Modern theme
document.documentElement.setAttribute("data-theme", "conservative-modern");

// Switch to Minimal Professional theme
document.documentElement.setAttribute("data-theme", "minimal-professional");
```

## Persistence

The current theme is automatically saved to `localStorage` and restored on page load.

## Demo

Visit `/theme-demo` to see all themes in action with component examples and color palettes.

## Design Principles

1. **Heritage Respect**: Colors and tones that honor traditional craftsmanship
2. **Professional Excellence**: Clean, trustworthy, and authoritative appearance
3. **Accessibility**: High contrast ratios and readable typography
4. **Consistency**: Unified color system across all components
5. **Flexibility**: Easy to extend and customize for different contexts
