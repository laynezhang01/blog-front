import React from 'react';
import {IHeading} from '@/libs/post';
import clsx from 'clsx';

interface ITocProps {
    headings: IHeading[];
    className?: string;
}

const Toc: React.FC<ITocProps> = ({headings, className}) => {
    return (
        <nav className={clsx('rounded-xl bg-card px-6 py-4 shadow-card-shadow', className)}>
            <ul>
                {headings.map(heading => (
                    <li
                        key={heading.id}
                        className={clsx(`ml-[${(heading.depth - 2) * 4}px]`)} // 根据层级动态调整缩进
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

export default Toc;
