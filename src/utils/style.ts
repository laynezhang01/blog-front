import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function fm(...rest) {
  if (Array.isArray(rest)) {
    return twMerge(clsx(...rest));
  }
  return twMerge(clsx(rest));
}
