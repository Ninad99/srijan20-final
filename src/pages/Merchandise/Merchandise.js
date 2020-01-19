import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import Tshirt from './9-2-t-shirt-png-pic-thumb.png'
import Bag from './kisspng-paper-bag-kraft-paper-corrugated-box-design-shopping-bag-5ab5bfdaa863e8.0828289715218605706897.jpg'

const Merchandise = () => {
  return (
    
    <section className="dashboard">
    <Row >
      <Col md={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
        <Card title="Buy the official Srijan Clothing Merchandise" style={{ width: '100%' }}>
          <ul className="custom-carousel">
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Tshirt} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Tshirt} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Tshirt} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Tshirt} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
          </ul>
        </Card>
      </Col>
      </Row>
      <Row >
      <Col md={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
        <Card title="Buy the official Srijan Clothing Merchandise" style={{ width: '100%' }}>
          <ul className="custom-carousel">
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Bag} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Bag} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Bag} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Event title" style={{ width: 200 }}>
                <img src={Bag} style={{ marginBottom: '20px',  width: '100%' }} alt="Product img"></img>
                <Button style={{ marginRight: '20px' }}>+</Button>
                <Button>-</Button>
              </Card>
            </li>
          </ul>
        </Card>
      </Col>
      </Row>

  </section>
  );
}

export default Merchandise;