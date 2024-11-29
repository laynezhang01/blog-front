import React from 'react';
import {IHeading} from '@/libs/post';

interface ITocProps {
    headings: IHeading[];
    className?: string;
}

const Toc: React.FC<ITocProps> = ({headings, className}) => {
    return (
        <nav className={className}>
            <ul>
                {headings.map(heading => (
                    <li
                        key={heading.id}
                        className={`ml-${(heading.depth - 2) * 4} list-none`} // 根据层级动态调整缩进
                    >
                        <a href={`#${heading.id}`} className="text-blue-600 transition-colors hover:text-blue-800">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Toc;
