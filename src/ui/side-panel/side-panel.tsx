import React, { FC } from 'react';
import { Layout } from 'antd';

export const SidePanel: FC = ({ children }) => {
    return (
        <Layout.Sider
            theme='light'
            width={260}
            style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            {children}
        </Layout.Sider>
    );
};
