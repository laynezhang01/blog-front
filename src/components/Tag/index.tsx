import React from 'react';
import {TAGS_MAP} from '@/constants/tag';
import Link from 'next/link';

interface ITagProps {
    value: string;
}

const Tag: React.FC<ITagProps> = props => {
    const {value} = props;
    const tagData = TAGS_MAP.get(value);

    if (!tagData) {
        return;
    }

    return (
        <Link
            className="inline-flex items-center justify-center rounded-[10px] px-4 py-[2px] text-xs text-white"
            style={{backgroundColor: tagData.color}}
            href={`/tags/${value}`}
        >
            {tagData.label}
        </Link>
    );
};

export default Tag;
