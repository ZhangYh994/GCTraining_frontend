import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';

// DefaultIndex component to display a card with a title and a button
const DefaultIndex: React.FC<{ title: string }> = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className="default-index-root">
            <Card hoverable className="default-index-card" styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex justify="space-between">
                    <img
                        alt="avatar"
                        src="https://ts2.tc.mm.bing.net/th/id/OIP-C.LrQJFtU3pE762ydAZbaEUAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                        className="default-index-img"
                    />
                    <Flex vertical align="flex-end" justify="space-between" className="default-index-flex">
                        <Typography.Title level={2}>
                            已跳转：{title}
                        </Typography.Title>
                        <Button type="primary" onClick={() => navigate('/permission/user')}>
                            跳转至用户管理
                        </Button>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
};

export default DefaultIndex;
