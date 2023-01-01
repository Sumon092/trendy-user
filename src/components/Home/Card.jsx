

import { MailOutlined, PhoneOutlined, DeleteOutlined, HeartOutlined, EditFilled, GlobalOutlined } from '@ant-design/icons';
import { Button, Modal, Card, Row, Col, Form, Input } from 'antd';
import { useState } from 'react';
import './Card.css'


const Cards = () => {
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
            <Row gutter={[16, 16
            ]}>
                <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <div className='container'>
                        <div className='image-container'>
                            <div className='avatar'>
                                <img src="https://avatars.dicebear.com/v2/avataaars/Karianne.svg?options[mood][]=happy" alt="" />
                            </div>
                        </div>

                        <Card style={{ borderRadius: "0" }}>
                            <div className='card-info'>
                                <h3>Earling Haland</h3>
                                <div className='info-detail'>
                                    <MailOutlined />
                                    <p>emsl.sumon@gmail.com</p>
                                </div>
                                <div className='info-detail'>
                                    <PhoneOutlined />
                                    <p>01916231926</p>
                                </div>
                                <div className='info-detail'>
                                    <GlobalOutlined />
                                    <p>www.asp.net</p>
                                </div>
                            </div>
                        </Card>
                        <div className='button-container'>
                            <div className='button'>
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none', color: 'red' }} icon={<HeartOutlined />}></Button>
                            </div>

                            <div className='button'>
                                <Button onClick={showModal} style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<EditFilled />}></Button>
                                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                                            <Input />
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
                                            <Input />
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
                                            <Input />
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
                                            <Input />
                                        </Form.Item>
                                    </Form>
                                </Modal>
                            </div>
                            <div className='button' style={{ border: 'none' }}>
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<DeleteOutlined />}></Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </section>
    );
};

export default Cards;