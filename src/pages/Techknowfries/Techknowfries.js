import React from 'react';
import { Row, Col, Card } from 'antd';
import techPng from '../../assets/Images/TEFRIESWHITE.png';
import './Techknowfries.css';

const Technofries = props => {
  return (
    <section className="technofries">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title={<img src={techPng} alt="techknowfries" className="technofries-img"/>}>
            This section will be updated soon!
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Technofries;