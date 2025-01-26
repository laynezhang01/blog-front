import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { highlight } from 'sugar-high';
import clsx from 'clsx'; // 如果需要样式文件，请取消注释并配置
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface CodeProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: string; // 代码内容
  className: string; // 支持自定义 className
}

export default function Code({ children, className = '', ...props }: CodeProps) {
  const lang = className.replace(/^language-/, '');

  // 高亮代码
  const codeHTML = highlight(children);

  // 判断是否为行内代码
  const isInline = !className.includes('language-');

  // 行内代码渲染
  if (isInline) {
    return (
      <code
        className={clsx(inter.className, sourceCodePro.className, className, 'inline-code')}
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  }

  // 代码块渲染
  return (
    <code
      className={clsx(
        `language-${lang} text-[14px] leading-normal`,
        inter.className,
        sourceCodePro.className,
        className
      )}
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
}
