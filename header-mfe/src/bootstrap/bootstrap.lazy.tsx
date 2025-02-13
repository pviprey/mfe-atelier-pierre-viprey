import React, { lazy, Suspense } from 'react';

const Lazybootstrap = lazy(() => import('./bootstrap'));

const bootstrap = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazybootstrap {...props} />
  </Suspense>
);

export default bootstrap;
