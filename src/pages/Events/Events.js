import React from 'react';
import { Row, Col, Card } from 'antd';
import Chart1 from './../../components/Chart1/Chart';

const Events = props => {
  return (
    <Row>
     <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
     <Card title="Your Participation in Srijan 2020 Events" style={{ width: '100%' }}>
     <Chart1></Chart1>
     </Card>
     </Col>
     <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
     <Card title="Your Participation in Srijan 2020" style={{ width: '100%' }}>

     </Card>
     </Col>
    </Row>
  );
}

export default Events;