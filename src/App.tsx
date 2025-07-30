import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './compoments/layout/MainLayout';
import 'antd/dist/reset.css';
import './App.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

      </Route>
    </Routes>
  );
};

export default App;
