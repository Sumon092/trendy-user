
import { Button, Card, Col, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { MailOutlined, HeartFilled, PhoneOutlined, DeleteOutlined, HeartOutlined, EditFilled, GlobalOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteUser, fetchUsers, likeUser } from '../../features/users/userSlice';


const User = ({ user }) => {
    const { id, name, email, phone, website } = user || {};
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
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
    const handleDelete = () => {
        dispatch(deleteUser(id));
    };
    const handleLike = (e) => {
        // dispatch(likeUser(id));
        setIsLiked(true)
        console.log(`user id ${id} liked`)

    }

    return (
        <>
            <Col span={6} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                <div className='container'>
                    <div className='image-container'>
                        <div className='avatar'>
                            <img src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy `} alt="" />
                        </div>
                    </div>

                    <Card style={{ borderRadius: "0" }}>
                        <div className='card-info'>
                            <h3>{name}</h3>
                            <div className='info-detail'>
                                <MailOutlined />
                                <p>{email}</p>
                            </div>
                            <div className='info-detail'>
                                <PhoneOutlined />
                                <p>{phone}</p>
                            </div>
                            <div className='info-detail'>
                                <GlobalOutlined />
                                <p>{website}</p>
                            </div>
                        </div>
                    </Card>
                    <div className='button-container'>
                        <div className='button'>
                            {
                                !isLiked &&
                                <Button loading={false} onClick={handleLike} style={{ border: "none", background: 'none', boxShadow: 'none', color: 'red' }} icon={<HeartOutlined />}></Button>
                            }
                            {
                                isLiked && <Button loading={false} onClick={handleLike} style={{ border: "none", background: 'none', boxShadow: 'none', color: 'red' }} icon={<HeartFilled />}></Button>
                            }

                        </div>

                        <div onClick={showModal} className='button'>
                            <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<EditFilled />}></Button>
                        </div>
                        <div className='button' style={{ border: 'none' }}>
                            <Button onClick={handleDelete} style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<DeleteOutlined />}></Button>
                        </div>

                    </div>
                </div>
            </Col>
            <div>

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
                            <Input defaultValue={name} />
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
                            <Input defaultValue={email} />
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
                            <Input defaultValue={phone} />
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
                            <Input defaultValue={website} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    );
};

export default User;