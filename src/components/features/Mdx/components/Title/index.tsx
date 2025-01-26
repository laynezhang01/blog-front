import { createElement, DetailedHTMLProps, HTMLAttributes } from 'react';
import { slugify } from '@/utils/mark';

import cls from './index.module.scss';
import clsx from 'clsx';

export default function createTitle(level: number) {
  return (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    const { children, ...restProps } = props;

    // 生成 slug
    const slug = slugify(children as string);

    // 创建标题元素
    return createElement(
      `h${level}`,
      {
        id: slug,
        className: clsx(
          cls[`h${level}`],
          cls.h,
          'group mt-[20px] mb-[14px] text-primary font-bold'
        ),
        ...restProps,
      },
      [
        createElement(
          'a',
          {
            href: `#${slug}`,
            key: `link-${slug}`,
            className: 'anchor',
          },
          children
        ),
        createElement(
          'span',
          {
            key: `hash-${slug}`,
            className:
              'hash-symbol opacity-0 group-hover:opacity-100 transition-opacity duration-200',
          },
          '# ' // 显示 # 符号（注意空格）
        ),
      ]
    );
  };
}
