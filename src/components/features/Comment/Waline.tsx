'use client';

import { type WalineInstance, type WalineInitOptions, init } from '@waline/client';
import React, { useEffect, useRef } from 'react';

import '@waline/client/meta';
import '@waline/client/style';

export type WalineOptions = Omit<WalineInitOptions, 'el'> & { path: string };

export const Waline = (props: Omit<WalineOptions, 'path'>) => {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      path: window.location.pathname.replace(/\/$/, ''),
      el: containerRef.current,
      dark: 'html[data-theme="dark"]',
    });

    return () => walineInstanceRef.current?.destroy();
  });

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, [props]);

  return <div ref={containerRef} />;
};

export default Waline;
