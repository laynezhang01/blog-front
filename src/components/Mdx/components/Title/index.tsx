import {createElement, DetailedHTMLProps, HTMLAttributes} from 'react';
import {slugify} from '@/utils/mark';

export default function createTitle(level: number) {
    return (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
        const {children} = props;
        let slug = slugify(children);
        const ele = createElement(
            `h${level}`,
            {
                id: slug
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

        return ele;
    };
}
