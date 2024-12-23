import {MDXRemoteProps} from 'next-mdx-remote';
import createHeading from '@/components/Mdx/components/Heading';
import Anchor from '@/components/Mdx/components/Anchor';
// import Callout from '@/components/Mdx/components/Callout';
import Code from '@/components/Mdx/components/Code';
import Image from '@/components/Mdx/components/Image';

export const mdxComponents = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    a: Anchor,
    code: Code,
    // Callout,
    Image,
    img: Image
} as MDXRemoteProps['components'];
