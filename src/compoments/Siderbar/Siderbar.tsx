import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];
import { DashboardOutlined, ScheduleOutlined, SettingOutlined, TeamOutlined, UserOutlined, SafetyOutlined, ApartmentOutlined, KeyOutlined, } from '@ant-design/icons';
import './Siderbar.css';
import { ROUTES } from '../../options/routes';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const items: MenuItem[] = [
        {
            key: ROUTES.DASHBOARD,
            label: '首页看板',
            icon: <DashboardOutlined />,
            onClick: () => {
                navigate(ROUTES.DASHBOARD);
            }
        },
        {
            key: ROUTES.SCHEDULE,
            label: '排班管理',
            icon: <ScheduleOutlined />,
            onClick: () => navigate(ROUTES.SCHEDULE),
        },
        {
            key: ROUTES.PRODUCTION,
            label: '生产管理',
            icon: <SettingOutlined />,
            onClick: () => navigate(ROUTES.PRODUCTION),
        },
        {
            key: ROUTES.ATTENDANCE,
            label: '考勤管理',
            icon: <TeamOutlined />,
            onClick: () => navigate(ROUTES.ATTENDANCE),
        },
        {
            key: ROUTES.BASIC_INFO,
            label: '基础信息',
            icon: <SettingOutlined />,
            onClick: () => navigate(ROUTES.BASIC_INFO),
        },
        {
            key: ROUTES.PERMISSION,
            label: '权限管理',
            icon: <SafetyOutlined />,
            children: [
                {
                    key: ROUTES.ORGANIZATION,
                    label: '组织管理',
                    icon: <ApartmentOutlined />,
                    onClick: () => navigate(ROUTES.ORGANIZATION),
                },
                {
                    key: ROUTES.ROLE,
                    label: '角色管理',
                    icon: <TeamOutlined />,
                    onClick: () => navigate(ROUTES.ROLE),
                },
                {
                    key: ROUTES.USER,
                    label: '用户管理',
                    icon: <UserOutlined />,
                    onClick: () => navigate(ROUTES.USER),
                },
                {
                    key: ROUTES.AUTH,
                    label: '权限管理',
                    icon: <KeyOutlined />,
                    onClick: () => navigate(ROUTES.AUTH),
                },
            ],
        },

    ]

    return (
        <div className="sidebar-container">
            <div className="logo-container">
                功能菜单栏
            </div>
            <Menu className="sidebar-menu"
                mode="inline"
                selectedKeys={[location.pathname]}
                items={items}
            />
        </div>
    );

};

export default Sidebar;
