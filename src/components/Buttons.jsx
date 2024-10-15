import React from 'react';

const Buttons = ({ content, border, path, download }) => {
    return (
        <a href={path} className={`button ${border ? 'button-border' : ''}`} {...(download ? { download: true } : {})}>
            {content}
        </a>
    );
};

export default Buttons;