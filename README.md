# Next.js 15 App Directory Bug: Dynamic Routing and Image Optimization

This repository demonstrates an unexpected behavior in Next.js 15's App Directory when combining dynamic routing with image optimization.  The issue involves images not loading correctly or showing broken image icons on certain routes.

## Bug Description

When using dynamic routes and the `next/image` component, image optimization seems to fail intermittently. This may manifest as broken image placeholders or complete failure to load the images.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/` and `/post/1` (or other dynamic routes).
5. Observe that images may not load correctly on some routes.

## Expected Behavior

Images should load correctly on all routes regardless of dynamic segments.

## Actual Behavior

Images may fail to load or show a broken image icon on some dynamic routes.

## Solution

The solution involves ensuring proper configuration of your image optimization and potential adjustments to dynamic route handling within the App directory.