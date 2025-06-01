
import React from 'react';

export interface Feature {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
}

export interface Assistant {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  screenshotUrl: string;
  accentColor: string; // Tailwind color class e.g. 'text-blue-400'
  gradientFrom: string; // Tailwind color class e.g. 'from-blue-700'
  gradientTo: string; // Tailwind color class e.g. 'to-blue-500'
  ctaTagline?: string; // Optional: Call to action tagline
  ctaButtonText?: string; // Optional: Call to action button text
  externalLink?: string; // Optional: External URL for the assistant
}

export interface Founder {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string;
  accentColor?: string; // Optional: Tailwind text color class e.g. 'text-green-400'
}

export interface NavItem {
  label: string;
  href: string;
}

// For ScrollProgressIndicator
export interface ProgressSection {
  id: string;
  name: string;
}