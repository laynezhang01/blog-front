import React from 'react';
import {CoverItem, NoCoverItem} from '@/components/pages/home/post';
import {IMDFile} from '@/libs/post/type';

export interface IPostItemProps {
    post: IMDFile;
}

export const PostItem: React.FC<IPostItemProps> = ({post}) => {
    if (post.data.coverImage) {
        return <CoverItem post={post} />;
    }
    return <NoCoverItem post={post} />;
};
