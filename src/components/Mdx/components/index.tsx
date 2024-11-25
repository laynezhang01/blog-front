import createTitle from '@/components/Mdx/components/Title';
import Link from '@/components/Mdx/components/Link';
import Callout from '@/components/Mdx/components/Callout';
import Code from '@/components/Mdx/components/Code';
import Image from '@/components/Mdx/components/Image';

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
    img: Image
};
