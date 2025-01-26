'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

export interface IAnimatedSessionProps {
  className?: string;
}

export const AnimatedSession: React.FC<PropsWithChildren<IAnimatedSessionProps>> = ({
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current as HTMLElement);

    return () => observer.disconnect();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={clsx(className)}
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
