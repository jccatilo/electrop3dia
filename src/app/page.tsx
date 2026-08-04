'use client';

import { useEffect, useState } from 'react';
import { Home } from '@/components/home/Home';
import { HomeMob } from '@/components/home/HomeMob';

export default function HomePage() {
  // `null` until the viewport is measured: defaulting to desktop made phones
  // mount the full desktop page (and its WebGL canvas) first, then tear it down.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return <HomeMob />;
  }

  return <Home />;
}