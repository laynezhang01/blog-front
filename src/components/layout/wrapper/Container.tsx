import React, {PropsWithChildren} from 'react';
import clsx from 'clsx';

export interface IContainerProps {
    outerClassName?: string;
    innerClassName?: string;
}

export const Container: React.FC<PropsWithChildren<IContainerProps>> = ({outerClassName, innerClassName, children}) => {
    return (
        <div className={clsx(outerClassName, 'm-auto flex w-full max-w-[75rem] justify-center')}>
            <div className={clsx(innerClassName, 'flex-1 px-4')}>{children}</div>
        </div>
    );
};
