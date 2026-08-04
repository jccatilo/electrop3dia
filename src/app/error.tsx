'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// Route-level error boundary. Without this, any throw from a client component —
// most likely a GLB that fails to load, or the Draco decoder CDN being blocked on
// a restricted network — takes the whole route to a blank white page.
// Deliberately does NOT use ThemeContext: the theme provider is one of the things
// that can fail, so this must render standalone.
export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Route error:', error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 text-gray-900 px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-sm text-gray-600 mb-1">
          This part of the workbench failed to load. Your connection may have
          dropped a 3D model, or the page hit an unexpected error.
        </p>
        <p className="text-xs text-gray-400 mb-6 font-mono break-words">
          {error.message}
        </p>

        <div className="flex items-center justify-center gap-2">
          <button
            onClick={reset}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
