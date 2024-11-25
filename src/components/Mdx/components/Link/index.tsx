import {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import NextLink from 'next/link';

export default function Link(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
    const href = props.href ?? '';

    if (href.startsWith('/')) {
        return (
            <NextLink href={href} {...props}>
                {props.children}
            </NextLink>
        );
    }

    if (href.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
