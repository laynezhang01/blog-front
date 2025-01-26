import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

import { ISocial } from '@/config/social';

export const Social: React.FC<ISocial> = (props) => {
  const { icon, title, href } = props;

  return (
    <NextLink
      className={clsx(
        'flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black text-white hover:scale-125',
        'text-lg transition-all ease-linear'
      )}
      href={href}
      title={title}
    >
      {icon}
    </NextLink>
  );
};
