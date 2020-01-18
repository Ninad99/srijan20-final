import React from 'react';
import { Row, Col, Card } from 'antd';
import './Dashboard.css';

const Dashboard = props => {
  return (
    <section className="dashboard">
      <Row style={{ background: 'lightblue' }}>
        <Col md={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Your registered events" style={{ width: '100%' }}>
            <ul className="custom-carousel">
              <li className="custom-carousel-item">
                <Card size="small" title="Event title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Event title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Event title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Event title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Event title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
            </ul>
          </Card>
        </Col>
        <Col md={12} style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Your registered workshops" style={{ width: '100%' }}>
          <ul className="custom-carousel">
              <li className="custom-carousel-item">
                <Card size="small" title="Workshop title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Workshop title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Workshop title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Workshop title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card size="small" title="Workshop title" style={{ width: 200 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;