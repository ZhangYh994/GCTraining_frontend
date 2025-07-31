import React from 'react';
import { Layout, Avatar, Dropdown, Space, Typography } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './Header.css';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
    const currentUser = {
        username: 'admin',
        nickname: '管理员',
    };

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'profile',
            label: '个人设置',
            icon: <SettingOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            label: '退出登录',
            icon: <LogoutOutlined />,
            danger: true,
        },
    ];


    return (
        <AntHeader className="header-container">
            <div>
                <h1 className="header-title">
                    后台管理系统
                </h1>
            </div>

            <div className="header-right">
                <Dropdown
                    menu={{
                        items: userMenuItems,
                    }}
                    placement="bottomRight"
                    arrow
                >
                    <Space className="user-dropdown">
                        <Avatar size={32} icon={<UserOutlined />} />
                        <div className="user-info">
                            <Text style={{ fontSize: 14, fontWeight: 500 }}>
                                {currentUser.nickname}
                            </Text>
                            <Text type="secondary" style={{ fontSize: 12 }}>
                                {currentUser.username}
                            </Text>
                        </div>
                    </Space>
                </Dropdown>
            </div>
        </AntHeader>
    );
};

export default Header;
