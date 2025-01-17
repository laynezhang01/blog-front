import clsx from 'clsx';
import React, {PropsWithChildren} from 'react';

export interface IPostItemWrapperProps {
    className?: string;
}

export const PostItemWrapper: React.FC<PropsWithChildren<IPostItemWrapperProps>> = ({
    className,
    children,
}) => {
    return (
        <div
            className={clsx(
                className,
                'relative h-[24rem] overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl'
            )}
        >
            {children}
        </div>
    );
};
