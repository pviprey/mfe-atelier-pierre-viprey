import React, { lazy, Suspense } from 'react';

const Lazybutton = lazy(() => import('./button'));

const button = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazybutton {...props} />
  </Suspense>
);

export default button;
