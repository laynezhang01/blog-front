import React, {PropsWithChildren} from 'react';
import clsx from 'clsx';

export interface IContainerProps {
    outerClassName?: string;
    innerClassName?: string;
}

export const Container: React.FC<PropsWithChildren<IContainerProps>> = ({outerClassName, innerClassName, children}) => {
    return (
        <div className={clsx(outerClassName, 'm-auto flex w-full justify-center xl:max-w-[75rem]')}>
            <div className={clsx(innerClassName, 'flex-1 px-8 md:mx-8')}>{children}</div>
        </div>
    );
};
