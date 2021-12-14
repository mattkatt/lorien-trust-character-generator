import React, { FC, useState } from "react"
import { Layout } from "antd"
import { CollapseIcon } from "../icons"

export const SidePanel: FC = ({ children }) => {
    const { Sider } = Layout
    const [isCollapsed, setCollapsed] = useState(false)

    return (
        <>
            <Sider
                collapsible
                collapsed={isCollapsed}
                onCollapse={setCollapsed}
                defaultCollapsed={false}
                theme="light"
                width={260}
                collapsedWidth={0}
                trigger={<CollapseIcon collapsed={isCollapsed} />}
            >
                {children}
            </Sider>
        </>
    )
}
