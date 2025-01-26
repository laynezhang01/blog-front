import Callout from '@/components/features/Mdx/components/Callout';
import Code from '@/components/features/Mdx/components/Code';
import Image from '@/components/features/Mdx/components/Image';
import Link from '@/components/features/Mdx/components/Link';
import createTitle from '@/components/features/Mdx/components/Title';
import Pre from '@/components/features/Mdx/components/Pre';

export const mdxComponents = {
  h1: createTitle(1),
  h2: createTitle(2),
  h3: createTitle(3),
  h4: createTitle(4),
  h5: createTitle(5),
  h6: createTitle(6),
  a: Link,
  code: Code,
  pre: Pre,
  Callout,
  Image,
  img: Image,
  table: (props) => (
    <table className="min-w-full table-auto border-collapse border border-gray-200" {...props} />
  ),
  th: (props) => (
    <th className="border-b border-gray-300 bg-gray-100 px-6 py-3 text-left" {...props} />
  ),
  td: (props) => <td className="border-b border-gray-300 px-6 py-3" {...props} />,
  tr: (props) => <tr className="hover:bg-gray-100" {...props} />,
};
