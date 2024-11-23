import React from 'react';

interface PropsBtn {
    PushData?: () => void;
    children?: string;
}

const Button: React.FC<PropsBtn> = ({ PushData, children }) => {
    return (
        <button onClick={PushData} className='btn'>
            {children}
        </button>
    );
};

export default Button;