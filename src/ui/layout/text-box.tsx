import React, { FC, CSSProperties } from 'react';

interface ITextBoxProps {
    padding?: number;
    margin?: number;
    sticky?: boolean;
}

export const TextBox: FC<ITextBoxProps> = ({ padding = 16, margin = 0, sticky = false, children }) => {
    const textBoxStyle: CSSProperties = {
        padding: `0 ${padding}px`,
        margin: `${margin}px 0`,
    };

    if (sticky) {
        textBoxStyle.position = 'sticky';
        textBoxStyle.top = 0;
        textBoxStyle.zIndex = 100;
        textBoxStyle.backgroundColor = 'white';
    }

    return <div style={textBoxStyle}>{children}</div>;
};
