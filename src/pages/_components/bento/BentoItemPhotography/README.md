# BentoItemPhotography Component

A responsive photography component that displays a rotating gallery of images with smooth transitions and interactive controls.

## Features

- Auto-rotating image carousel on hover
- Navigation dots for manual image selection
- Responsive design that works on all screen sizes
- Smooth transitions between images
- View Gallery button that links to the full photography page
- Accessible with proper ARIA labels and keyboard navigation

## Props

The component accepts the following props:

```typescript
interface Photo {
  src: string;      // Image source URL
  alt: string;      // Alt text for accessibility
  title: string;    // Image title
  description: string; // Image description
}

interface BentoItemPhotographyProps {
  photos: Photo[];  // Array of photo objects
  className?: string; // Optional CSS class
}
```

## Usage

```astro
---
import BentoItemPhotography from './BentoItemPhotography';

const photos = [
  {
    src: '/images/photography/placeholder-1.jpg',
    alt: 'Mountain landscape',
    title: 'Mountain View',
    description: 'Beautiful mountain range at sunset'
  },
  // Add more photos as needed
];
---

<BentoItemPhotography photos={photos} />
```

## Styling

The component uses Tailwind CSS for styling. You can override the default styles by passing a custom className prop.

## Dependencies

- React
- Tailwind CSS
- @headlessui/react (for the Tooltip component)

## Accessibility

- All interactive elements have proper ARIA attributes
- Images have alt text for screen readers
- Keyboard navigation is fully supported
- Focus states are clearly visible for keyboard users
