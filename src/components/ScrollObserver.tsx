'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    // Ensure the page always lands at the top Hero section when opened or refreshed
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
