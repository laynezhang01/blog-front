import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import cls from './index.module.css';

interface CodeProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: string; // 代码内容
}

export default function Pre({ children, ...props }: CodeProps) {
  return (
    <div
      className={clsx(
        cls.preWrapper,
        'relative clear-both w-full max-w-full overflow-x-auto whitespace-nowrap rounded-xl bg-zinc-200/60 pb-2 pt-8 shadow-md'
      )}
      {...props}
    >
      <pre className="float-left px-6">{children}</pre>
    </div>
  );
}
