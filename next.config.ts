import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';


// Initialize the Vanilla Extract plugin
const withVanillaExtract = createVanillaExtractPlugin();

// Define your Next.js configuration
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

// Combine Vanilla Extract with Next.js configuration
export default withVanillaExtract(nextConfig);
