import React from 'react';

const TextBox = ({ children, bgColor }) => {
    return (
        <div style={{
            backgroundColor: bgColor, boxShadow: (bgColor != null ? '0 0 20px 0 rgba(0, 0, 0, 0.4)' : 'none')
        }} className='textbox' >
            {children}
        </div >
    );
};

export default TextBox;