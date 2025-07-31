import React, { useState, useEffect } from 'react';
// import styles from './index.css';
import { Space, Table, Tag, Popconfirm, message, Modal, Form, Input, Select, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
import type { User } from '../../../options/types';
import { userService } from '../../../service/userService';
import { DEPARTMENT_OPTIONS, USER_STATUS_OPTIONS } from '../../../options/routes';


const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();


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
                    <a onClick={() => handleEdit(record)}>编辑</a>
                    <Popconfirm
                        title="确定要删除吗？"
                        onConfirm={() => handleDelete(record.id)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <a style={{ color: 'red' }}>删除</a>
                    </Popconfirm>
                </Space>
            ),
        }
    ]

    const fetchUsers = async () => {
        try {
            const userList = await userService.getUserList();
            setUsers(userList);
        } catch (error) {
            message.error('获取用户列表失败');
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await userService.deleteUser(id);
            console.log('删除成功1');
            message.success('删除成功');
            console.log('删除成功2');
            fetchUsers();
        } catch (error) {
            message.error('删除失败');
        }
    };

    const handleAdd = () => {
        setEditingUser(null);
        form.resetFields();
        setIsModalOpen(true);
    };

    const handleEdit = (user: User) => {
        setEditingUser(user);
        form.setFieldsValue({
            ...user,
            password: '',
        });
        setIsModalOpen(true);
    };


    const handleSubmit = async (values: any) => {
        console.log('表单提交的数据:', values); // 添加这行查看提交的数据
        console.log('是否为编辑模式:', !!editingUser); // 查看模式
        try {
            if (editingUser) {
                await userService.updateUser(editingUser.id, values);
                message.success('编辑成功');
            } else {
                const submitData = {
                    ...values,
                    loginType: '正常登录'
                };
                await userService.createUser(submitData);
                message.success('添加成功');
            }
            setIsModalOpen(false);
            setEditingUser(null);
            fetchUsers();
        } catch (error) {
            message.error('操作失败');
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);



    return (
        <div style={{
            height: '100%',
            overflow: 'auto',  // 添加滚动
            padding: '16px'    // 添加内边距
        }}>
            <Space style={{ marginBottom: 16 }}>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={handleAdd}
                >
                    新增用户
                </Button>
            </Space>


            <Table<User>
                columns={columns}
                dataSource={users}
                rowKey="id"
                pagination={{
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total) => `共 ${total} 条记录`,
                }}
            />

            <Modal
                style={{ top: 20 }}
                title={editingUser ? '编辑用户' : '添加用户'}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={() => form.submit()}
            >

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}

                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input
                            disabled={!!editingUser}
                            placeholder="请输入用户名"
                            style={editingUser ? { backgroundColor: '#f5f5f5' } : {}}
                        />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={editingUser ? [] : [{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password
                            placeholder={editingUser ? '不填写则不修改密码' : '请输入密码'}
                        />
                    </Form.Item>

                    <Form.Item
                        label="昵称"
                        name="nickname"
                        rules={[{ required: true, message: '请输入昵称' }]}
                    >
                        <Input placeholder="请输入昵称" />
                    </Form.Item>

                    <Form.Item
                        label="手机号"
                        name="phone"
                        rules={[
                            { required: true, message: '请输入手机号' },
                            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
                        ]}
                    >
                        <Input placeholder="请输入手机号" />
                    </Form.Item>

                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[
                            { required: true, message: '请输入邮箱' },
                            { type: 'email', message: '请输入正确的邮箱格式' }
                        ]}
                    >
                        <Input placeholder="请输入邮箱" />
                    </Form.Item>

                    <Form.Item
                        label="部门"
                        name="department"
                        rules={[{ required: true, message: '请选择部门' }]}
                    >
                        <Select
                            placeholder="请选择部门"
                            options={DEPARTMENT_OPTIONS}
                        />
                    </Form.Item>

                    <Form.Item
                        label="直属领导"
                        name="manager"
                        rules={[{ required: true, message: '请输入直属领导' }]}
                    >
                        <Input placeholder="请输入直属领导" />
                    </Form.Item>

                    <Form.Item
                        label="状态"
                        name="status"
                        rules={[{ required: true, message: '请选择状态' }]}
                    >
                        <Select placeholder="请选择状态" options={USER_STATUS_OPTIONS} />
                    </Form.Item>

                    {editingUser && (
                        <Form.Item
                            label="登录类型"
                            name="loginType"
                            initialValue={editingUser ? editingUser.loginType : '正常登录'}
                            rules={[{ required: true, message: '请选择登录类型' }]}
                        >
                            <Select
                                disabled={true}
                            />
                        </Form.Item>
                    )}

                </Form>
            </Modal>
        </div>
    );
}





export default UserManagement;
