import { lazy, Suspense } from 'react';
import { ClientOnly } from '@tanstack/react-router';

const ShapeGrid = lazy(() => import('./ShapeGrid.jsx').then((m) => ({ default: m.default })));

export function ShapeGridBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <ClientOnly>
        <Suspense fallback={null}>
          <ShapeGrid speed={0.5} squareSize={40} direction="diagonal" borderColor="#999" hoverFillColor="#222" hoverTrailAmount={0} shape="square" />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
