import { lazy, Suspense } from 'react';
import { ClientOnly } from '@tanstack/react-router';

const Silk = lazy(() => import('./Silk.jsx').then((m) => ({ default: m.default })));

export function SilkBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <ClientOnly>
        <Suspense fallback={null}>
          <Silk speed={5} scale={1} color="#122590" noiseIntensity={1.5} rotation={0} />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
