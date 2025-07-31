import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './MainLayout.css';
import Sidebar from '../Siderbar/Siderbar';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <div className="app-layout">
            <div className="app-header">
                <Header />
            </div>

            <div className="app-body">
                <div className="app-sidebar">
                    <Sidebar />
                </div>

                <div className="app-content">
                    <Content className="main-content">
                        <Outlet />
                    </Content>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;


