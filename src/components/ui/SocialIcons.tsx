'use client';

import React from 'react';

interface IconProps {
  className?: string;
}

/**
 * Authentic Official Instagram Icon SVG with vibrant gradient fill
 */
export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <radialGradient id="ig-grad" cx="20%" cy="100%" r="130%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)" />
      <path
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.25-8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
        fill="#ffffff"
      />
    </svg>
  );
};

/**
 * Authentic Official Facebook Icon SVG with brand blue fill
 */
export const FacebookIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#1877F2" />
      <path
        d="M14 12h-2v7h-3v-7H7.5V9.5H9V8c0-2 1-3.5 3.5-3.5H15v2.5h-1.5c-1 0-1.5.5-1.5 1.5v1h2.5L14 12z"
        fill="#ffffff"
      />
    </svg>
  );
};
