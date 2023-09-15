import React, { FC } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export const AppFooter: FC = ({ children }) => {
    return (
        <Footer
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                position: 'sticky',
                bottom: 0,
            }}
        >
            {children}
        </Footer>
    );
};
