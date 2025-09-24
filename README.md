# Praman 3D Website

A modern, responsive website for Praman 3D - a professional surveying and digital documentation company specializing in high-accuracy 3D laser scanning and spatial services.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Service Pages**: Comprehensive pages for all services including:
  - 3D Laser Scanning
  - LiDAR Data Processing
  - 3D CAD Modelling
  - 3D BIM Modelling
  - Plant Modelling
  - VR & AR Services
  - Heritage Conservation
- **Interactive Components**: Image gallery, contact forms, and call-to-action sections
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags and structured content

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Headless UI

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── services/
│   │   ├── 3d-laser-scanning/
│   │   ├── lidar-processing/
│   │   ├── 3d-cad-modelling/
│   │   ├── 3d-bim-modelling/
│   │   ├── plant-modelling/
│   │   ├── vr-ar/
│   │   └── heritage-conservation/
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   └── ImageGallery.tsx      # Heritage projects gallery
```

## Pages Overview

### Home Page

- Hero section with company overview
- Services showcase
- About section
- Call-to-action sections

### About Us

- Company mission and values
- Team information
- Industries served
- Why choose Praman 3D

### Services

Each service page includes:

- Detailed service description
- Benefits and applications
- Process workflow
- Why choose Praman 3D
- Call-to-action sections

### Contact

- Contact form with validation
- Company contact information
- Quick response options

## Customization

### Colors

The website uses a blue color scheme as the primary brand color. To change colors, update the Tailwind CSS classes throughout the components.

### Content

All content is based on the provided Praman 3D website content. To update content, modify the respective page components.

### Images

- Placeholder images are used from Unsplash
- Replace with actual project images
- Update the ImageGallery component with real heritage project photos

## Deployment

1. **Build for Production**

   ```bash
   npm run build
   ```

2. **Deploy**
   The website can be deployed to any platform that supports Next.js:
   - Vercel (recommended)
   - Netlify
   - AWS Amplify
   - DigitalOcean App Platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Responsive design for all devices
- Fast loading times

## License

This project is created for Praman 3D. All rights reserved.
