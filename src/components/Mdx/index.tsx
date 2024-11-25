import React from 'react';
import {MDXRemote} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import {mdxComponents} from '@/components/Mdx/components';
import {MDXComponents} from 'mdx/types';

import './mdx.css';

export interface IMDXBodyProps {
    source: string;
}

const MDXBody: React.FC<IMDXBodyProps> = props => {
    return (
        <div className="prose">
            <MDXRemote
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }}
                {...props}
                components={mdxComponents as MDXComponents}
            />
        </div>
    );
};

export default MDXBody;
