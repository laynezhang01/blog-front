import React from 'react';
import {IHeading} from '@/libs/post/type';
import clsx from 'clsx';

interface ITocProps {
    headings: IHeading[];
    className?: string;
}

export const Toc: React.FC<ITocProps> = ({headings, className}) => {
    return (
        <nav className={clsx('rounded-xl px-6 py-4 shadow-card-shadow', className)}>
            <ul>
                {headings.map(heading => (
                    <li
                        key={heading.id}
                        style={{marginLeft: (heading.depth - 2) * 10}} // 根据层级动态调整缩进
                    >
                        <a href={`#${heading.id}`} className="text-secondary transition-colors hover:text-muted">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
