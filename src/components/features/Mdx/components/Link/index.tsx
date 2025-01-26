import NextLink from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export default function Link(props: LinkProps) {
  const { href = '', children, ...restProps } = props;

  // 内部路由
  if (href.startsWith('/')) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <a {...restProps}>{children}</a>
      </NextLink>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
      {children}
    </a>
  );
}
