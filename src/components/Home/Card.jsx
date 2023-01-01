

import { MailOutlined, PhoneOutlined, DeleteOutlined, HeartOutlined, EditFilled, GlobalOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space, Row, Col } from 'antd';
import { Card } from 'antd';
import './Card.css'

const { Meta } = Card;

const Cards = () => {
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
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<EditFilled />}></Button>
                            </div>
                            <div className='button' style={{ border: 'none' }}>
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<DeleteOutlined />}></Button>
                            </div>
                        </div>
                    </div>
                </Col>
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
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<EditFilled />}></Button>
                            </div>
                            <div className='button' style={{ border: 'none' }}>
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<DeleteOutlined />}></Button>
                            </div>
                        </div>
                    </div>
                </Col>
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
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<EditFilled />}></Button>
                            </div>
                            <div className='button' style={{ border: 'none' }}>
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<DeleteOutlined />}></Button>
                            </div>
                        </div>
                    </div>
                </Col>
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
                                <Button style={{ border: "none", background: 'none', boxShadow: 'none' }} icon={<EditFilled />}></Button>
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