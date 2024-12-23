import React, {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react';
import {highlight} from 'sugar-high';

import './code.css';

type TCodeProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>;

const Code: React.FC<TCodeProps> = ({children, ...props}) => {
    let codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{__html: codeHTML}} {...props} />;
};

export default Code;
