'use client';

import { useEffect } from 'react';

// Last-resort boundary for errors thrown in the root layout itself (e.g. inside
// ThemeProvider / ModelProvider), which `error.tsx` cannot catch. It replaces the
// root layout, so it must render its own <html> and <body>, and it cannot rely on
// any provider or on globals.css being applied.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Root layout error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          background: '#f9fafb',
          color: '#111827',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '28rem' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            The app failed to start
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1.5rem' }}>
            Reloading usually fixes this. If it keeps happening, your browser may be
            blocking site data for this page.
          </p>
          <button
            onClick={reset}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              background: '#2563eb',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
