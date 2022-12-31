
import { Row, Col } from 'antd'

const Card = () => {
    return (
        <section>
            <div className='block featureBlock bgGray'>
                <div className='container-fluid'>
                    <Row gutter={[16, 16]}>
                        <Col span={6} >column</Col>
                        <Col span={6} >column</Col>
                        <Col span={6} >column</Col>
                        <Col span={6} >column</Col>
                    </Row>
                </div>
            </div>

        </section>
    );
};

export default Card;