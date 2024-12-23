/**
 * 禁用全局布局
 */
import React, {PropsWithChildren} from 'react';

const StudioLayout: React.FC<PropsWithChildren> = ({children}) => {
    return <>{children}</>;
};

export default StudioLayout;
