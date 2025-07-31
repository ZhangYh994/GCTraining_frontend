import React, { useState, useEffect } from 'react';
// import styles from './index.css';
import { Space, Table, Tag, Popconfirm } from 'antd';
import type { TableProps } from 'antd';
import type { User } from '../../../options/types';


const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const columns: TableProps<User>['columns'] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '昵称',
            dataIndex: 'nickname',
            key: 'nickname',
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '部门',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: '直属领导',
            dataIndex: 'manager',
            key: 'manager',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === '正常' ? 'green' : 'volcano'}>
                    {status === '正常' ? '正常' : '禁用'}
                </Tag>
            ),
        },
        {
            title: '登录方式',
            dataIndex: 'loginType',
            key: 'loginType',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record: User) => (
                <Space size="middle">
                    <a onClick={() => console.log('Edit', record.id)}>编辑</a>
                    <Popconfirm
                        title="确定要删除吗？"
                        onConfirm={() => console.log('Delete', record.id)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <a style={{ color: 'red' }}>删除</a>
                    </Popconfirm>
                </Space>
            ),
        }
    ]

    return (
        <Table<User> columns={columns} dataSource={data} />
    );
}



const data: User[] = [
    {
        id: 1,
        username: 'admin',
        phone: '12345678901',
        email: 'admin@example.com',
        nickname: '管理员',
        department: '系统',
        manager: '系统管理员',
        status: '正常',
        loginType: '正常登录',
    },
    {
        id: 2,
        username: 'user',
        phone: '12345678901',
        email: 'user@example.com',
        nickname: '普通用户',
        department: '系统',
        manager: '系统管理员',
        status: '正常',
        loginType: '正常登录',
    }
];


export default UserManagement;
