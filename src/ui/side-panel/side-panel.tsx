import React, { FC } from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

interface ISidePanelProps {
    width: number;
}

export const SidePanel: FC<ISidePanelProps> = ({ width, children }) => {
    return (
        <Sider
            theme='light'
            width={width}
            style={{
                overflowY: 'scroll',
                height: 'calc(100% - 32px)',
                position: 'fixed',
                left: 0,
            }}
        >
            {children}
        </Sider>
    );
};
