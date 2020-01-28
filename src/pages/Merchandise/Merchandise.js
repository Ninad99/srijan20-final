import React, { useState } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import './Merchandise.css';

const Merchandise = () => {
  const [count, setCount] = useState(0);

  return (
  <section className="merchandise">
    <Row>
      <Col md={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
        <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
              bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
              style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
              title="Buy the official Srijan 20 clothing merchandise">
          <Row>
            <Col lg={8}>
              <div className="merchandise-img-container">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrimamuth.com%2Fwp-content%2Fuploads%2F2016%2F06%2FMammoth-evolution-Hanging-tee.png&f=1&nofb=1" alt="merchandise-img" />
              </div>
            </Col>
            <Col lg={16} className="merchandise-info">
              <p style={{ color: '#00ebff' }}>blah blah blah</p>
              <div className="merchandise-actions">
                <Icon type="plus" className="add-icon" onClick={e => setCount(prevCount => prevCount + 1)} /> <h1>{count}</h1> <Icon type="minus" className="minus-icon" onClick={e => setCount(prevCount => prevCount - 1)} />
              </div>
              <span className="btn">
                <p style={{ padding: 0, margin: 0 }}>Buy Now</p>
              </span>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </section>
  );
}

export default Merchandise;