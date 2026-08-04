'use client';

import { useEffect, useState } from 'react';
import { MainPage } from '@/components/learn/MainPage';
import { MainPageMob } from '@/components/learn/MainPageMob';

export default function LearnPage() {
  // `null` until the viewport is measured: defaulting to desktop made phones
  // mount the desktop workbench (and its WebGL canvas) first, then tear it down.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return <MainPageMob />;
  }

  return <MainPage />;
}