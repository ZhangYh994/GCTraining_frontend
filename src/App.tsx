import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './compoments/MainLayout/MainLayout';
import 'antd/dist/reset.css';
import './App.css';
import { ROUTES } from './options/routes';
import UserManagement from './pages/Permission/User';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
                <Route path={ROUTES.DASHBOARD} element={<div>Dashboard</div>} />
                <Route path={ROUTES.SCHEDULE} element={<div>Schedule Management</div>} />
                <Route path={ROUTES.PRODUCTION} element={<div>Production Management</div>} />
                <Route path={ROUTES.ATTENDANCE} element={<div>Attendance Management</div>} />
                <Route path={ROUTES.BASIC_INFO} element={<div>Basic Information</div>} />
                <Route path={ROUTES.PERMISSION} element={<div>Permission Management</div>} />
                <Route path={ROUTES.ORGANIZATION} element={<div>Organization Management</div>} />
                <Route path={ROUTES.ROLE} element={<div>Role Management</div>} />
                <Route path={ROUTES.USER} element={<UserManagement />} />
                <Route path={ROUTES.AUTH} element={<div>Authorization Management</div>} />
            </Route>
        </Routes>
    );
};

export default App;
