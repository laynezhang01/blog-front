import React from 'react';
import {IListPostData} from '@/libs/posts';
import Link from 'next/link';

const PostItem: React.FC<IListPostData> = props => {
    const {slug, data} = props;

    return (
        <li>
            <Link key={slug} href={`/posts/${slug}`}>
                <h2>{data.title}</h2>
                <span>{data.tags}</span>
            </Link>
        </li>
    );
};

export default PostItem;
