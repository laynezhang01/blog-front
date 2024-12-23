import React, {createElement, PropsWithChildren} from 'react';
import {cnToSlug} from '@/utils/text';

type THeading = 1 | 2 | 3 | 4 | 5 | 6;

const createHeading = (level: THeading = 1) => {
    const Heading: React.FC<PropsWithChildren> = ({children}) => {
        const slug = typeof children === 'string' ? cnToSlug(children) : undefined;

        if (!slug) {
            return null;
        }

        return createElement(
            `h${level}`,
            {
                id: slug,
                className: 'scroll-mt-16'
            },
            [
                createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor'
                })
            ],
            children
        );
    };

    return Heading;
};

export default createHeading;
