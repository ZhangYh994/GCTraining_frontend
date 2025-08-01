import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './compoments/MainLayout/MainLayout';
import 'antd/dist/reset.css';
import './App.css';
import { ROUTES } from './options/routes';
import UserManagement from './pages/Permission/User';
import DefaultIndex from './pages/Default/index';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
                <Route path={ROUTES.DASHBOARD} element={<DefaultIndex title="首页看板" />} />
                <Route path={ROUTES.SCHEDULE} element={<DefaultIndex title="排班管理" />} />
                <Route path={ROUTES.PRODUCTION} element={<DefaultIndex title="生产管理" />} />
                <Route path={ROUTES.ATTENDANCE} element={<DefaultIndex title="考勤管理" />} />
                <Route path={ROUTES.BASIC_INFO} element={<DefaultIndex title="基础信息" />} />
                <Route path={ROUTES.PERMISSION} element={<DefaultIndex title="权限管理" />} />
                <Route path={ROUTES.ORGANIZATION} element={<DefaultIndex title="组织管理" />} />
                <Route path={ROUTES.ROLE} element={<DefaultIndex title="角色管理" />} />
                <Route path={ROUTES.USER} element={<UserManagement />} />
                <Route path={ROUTES.AUTH} element={<DefaultIndex title="授权管理" />} />
            </Route>
        </Routes>
    );
};

export default App;
