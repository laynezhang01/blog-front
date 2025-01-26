'use client';

import clsx from 'clsx';
import React from 'react';

export interface ISlideItemProps {
  icon: React.ReactNode;
  spin?: boolean;
  onCLick?: () => void;
  className?: string;
}

// redix ui aschild需要传ref和...props
export const SlideItem = React.forwardRef<unknown, ISlideItemProps>((props, forwardedRef) => {
  const { icon, spin = false, className, onCLick, ...rest } = props;

  return (
    <button
      ref={forwardedRef}
      className={clsx(
        className,
        'mb-2 flex items-center justify-center rounded bg-card-bg p-[6px] text-[16px] text-secondary',
        'transition-all duration-300 ease-in-out hover:bg-card-bg'
      )}
      onClick={onCLick}
      {...rest}
    >
      <span className={clsx(spin && 'animate-spin')}>{icon}</span>
    </button>
  )
});
