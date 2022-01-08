import React, { FC } from 'react';
import { LeftOutlined, DownOutlined } from '@ant-design/icons';

interface ICollapseIcon {
  collapsed: boolean;
  onClick: () => void;
}

export const CollapseIcon: FC<ICollapseIcon> = ({ onClick, collapsed = false }) => {
  const Icon = collapsed ? LeftOutlined : DownOutlined;

  return <Icon onClick={onClick} />;
};
