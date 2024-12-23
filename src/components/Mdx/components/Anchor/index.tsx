import React, {AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren} from 'react';
import NextLink from 'next/link';

type TAnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Anchor: React.FC<PropsWithChildren<TAnchorProps>> = props => {
    const href = props.href ?? '';

    if (href.startsWith('/')) {
        return <NextLink href={href}>{props.children}</NextLink>;
    }

    if (href.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default Anchor;
