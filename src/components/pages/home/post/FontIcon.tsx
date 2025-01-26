import clsx from 'clsx';
import React from 'react';

interface IFontIconProps {
  icon?: React.ReactNode;
  text?: string;
  className?: string;
}

export const FontIcon: React.FC<IFontIconProps> = ({ icon, text, className }) => {
  if (!text || !icon) {
    return null;
  }

  return (
    <div className={clsx('flex items-center justify-center gap-1 text-xs', className)}>
      {icon}
      {text}
    </div>
  );
};
