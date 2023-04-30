import { ReactNode } from 'react';
import './FloatingActionButton.css';

type Props = {
    onClick: () => void;
    children: ReactNode;
};

const FloatingActionButton = ({ onClick, children }: Props) => {
    return (
        <button className="floating-action-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default FloatingActionButton;
