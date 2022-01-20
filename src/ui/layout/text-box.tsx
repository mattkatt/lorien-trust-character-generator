import React, { FC } from 'react';

interface ITextBoxProps {
    padding?: number;
    margin?: number;
}

export const TextBox: FC<ITextBoxProps> = ({ padding = 16, margin = 0, children }) => {
    const textBoxStyle = {
        padding: `0 ${padding}px`,
        margin: `${margin}px 0`,
    };

    return <div style={textBoxStyle}>{children}</div>;
};
