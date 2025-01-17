import {MDXComponents} from 'mdx/types';
import {MDXRemote} from 'next-mdx-remote/rsc';
import React from 'react';
import remarkGfm from 'remark-gfm';

import {mdxComponents} from '@/components/features/Mdx/components';

import './mdx.css';

export interface IMDXBodyProps {
    source: string;
}

export const MDXBody: React.FC<IMDXBodyProps> = (props) => {
    return (
        <div className="prose">
            <MDXRemote
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                }}
                {...props}
                components={mdxComponents as MDXComponents}
            />
        </div>
    );
};
