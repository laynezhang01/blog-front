import React, {PropsWithChildren} from 'react';
import clsx from 'clsx';

export interface IContainerProps {
    outerClassName?: string;
    innerClassName?: string;
}

export const Container: React.FC<PropsWithChildren<IContainerProps>> = ({outerClassName, innerClassName, children}) => {
    return (
        <div
            className={clsx(
                outerClassName,
                'container m-auto flex w-full max-w-[1440px] justify-center transition-all duration-300 ease-linear'
            )}
        >
            <div className={clsx(innerClassName, 'flex-1 px-4')}>{children}</div>
        </div>
    );
};
