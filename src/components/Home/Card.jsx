import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MailOutlined, PhoneOutlined, DeleteOutlined, HeartOutlined, EditFilled, GlobalOutlined } from '@ant-design/icons';
import { Button, Modal, Card, Row, Col, Form, Input } from 'antd';
import { useState } from 'react';
import './Card.css';
import { deleteUser, fetchUsers } from '../../features/users/userSlice';
import Loading from '../../utils/Loading';


const Cards = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <section>
            {user.Loading && <Loading />}
            <Row gutter={[16, 16
            ]}>

                {
                    user.users.map((user) => (
                        <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                            <div className='container'>
                                <div className='image-container'>
                                    <div className='avatar'>
                                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy `} alt="" />
                                    </div>
                                </div>

                                <Card style={{ borderRadius: "0" }}>
                                    <div className='card-info'>
                                        <h3 key={user.id}>{user.name}</h3>
                                        <div className='info-detail'>
                                            <MailOutlined />
                                            <p key={user.id}>{user.email}</p>
                                        </div>
                                        <div className='info-detail'>
                                            <PhoneOutlined />
                                            <p>{user.phone}</p>
                                        </div>
                                        <div className='info-detail'>
                                            <GlobalOutlined />
                                            <p>{user.website}</p>
                                        </div>
                                    </div>
                                </Card>
                                <div className='button-container'>
                                    <div className='button'>
                                        <Button style={{ border: "none", background: 'none', boxShadow: 'none', color: 'red' }} icon={<HeartOutlined />}></Button>
                                    </div>

                                    <div className='button'>
                                        <Button onClick={showModal} style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<EditFilled />}></Button>
                                        <Modal maskStyle={{
                                            backgroundColor: `#00000010`
                                        }} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                            <Form
                                                name="basic"
                                                labelCol={{
                                                    span: 8,
                                                }}
                                                wrapperCol={{
                                                    span: 16,
                                                }}
                                                initialValues={{
                                                    remember: true,
                                                }}
                                                onFinish={onFinish}
                                                onFinishFailed={onFinishFailed}
                                                autoComplete="off"
                                            >
                                                <Form.Item
                                                    label="name"
                                                    name="name"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input defaultValue={user.name} />
                                                </Form.Item>
                                                <Form.Item
                                                    label="email"
                                                    name="email"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your email!',
                                                        },
                                                    ]}
                                                >
                                                    <Input defaultValue={user.email} />
                                                </Form.Item>
                                                <Form.Item
                                                    label="phone"
                                                    name="phone"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your phone no.!',
                                                        },
                                                    ]}
                                                >
                                                    <Input defaultValue={user.phone} />
                                                </Form.Item>
                                                <Form.Item
                                                    label="website"
                                                    name="website"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your website!',
                                                        },
                                                    ]}
                                                >
                                                    <Input defaultValue={user.website} />
                                                </Form.Item>
                                            </Form>
                                        </Modal>
                                    </div>
                                    <div className='button' style={{ border: 'none' }}>
                                        <Button onClick={() => dispatch(deleteUser({ id: user.id }))} style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<DeleteOutlined />}></Button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                    ))}

            </Row>

        </section>
    );
};

export default Cards;