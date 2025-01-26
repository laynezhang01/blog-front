'use client';
import { usePathname } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';
import { NAVIGATION_ITEMS, INavigationItem } from '@/config/nav';
import Link from 'next/link';
import clsx from 'clsx';

export interface INavigationItemProps {
  data: INavigationItem;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({ data }) => {
  const pathname = usePathname();

  const isActive = useCallback(
    (item: INavigationItem) => {
      if (item.href && pathname.startsWith(item.href)) {
        return true;
      }
      if (item.subItems) {
        return item.subItems.some((subItem) => isActive(subItem));
      }
      return false;
    },
    [pathname]
  );

  if (data.href) {
    return (
      <Link href={data.href} className={clsx(isActive(data) && 'relative text-red-400')}>
        {data.title}
      </Link>
    );
  }

  return (
    <span className={clsx('cursor-pointer', isActive(data) && 'text-red-400')}>{data.title}</span>
  );
};
