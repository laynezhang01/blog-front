import clsx from 'clsx';
import React, {PropsWithChildren} from 'react';

export interface IContainerProps {
    outerClassName?: string;
    innerClassName?: string;
}

export const Container: React.FC<PropsWithChildren<IContainerProps>> = ({
    outerClassName,
    innerClassName,
    children,
}) => {
    return (
        <div
            className={clsx(
                outerClassName,
                'container mx-auto flex h-full w-full max-w-[1440px] justify-center transition-all duration-300 ease-linear'
            )}
        >
            <div className={clsx(innerClassName, 'h-full flex-1 px-4')}>{children}</div>
        </div>
    );
};
