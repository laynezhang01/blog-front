import Callout from '@/components/features/Mdx/components/Callout';
import Code from '@/components/features/Mdx/components/Code';
import Image from '@/components/features/Mdx/components/Image';
import Link from '@/components/features/Mdx/components/Link';
import createTitle from '@/components/features/Mdx/components/Title';

export const mdxComponents = {
    h1: createTitle(1),
    h2: createTitle(2),
    h3: createTitle(3),
    h4: createTitle(4),
    h5: createTitle(5),
    h6: createTitle(6),
    a: Link,
    code: Code,
    Callout,
    Image,
    img: Image,
};
