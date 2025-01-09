import React from 'react';

interface IMenuProps {
    icon: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const HeaderMenu: React.FC<IMenuProps> = ({icon, className, onClick}) => {
    return (
        <button className={className} onClick={onClick}>
            {icon}
        </button>
    );
};
