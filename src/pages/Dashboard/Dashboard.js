import React from 'react';
import { Row, Col, Card } from 'antd';
import Chart from './../../components/Chart/Chart';
import './Dashboard.css';

const Dashboard = props => {
  return (
    <section className="dashboard">
      <Row >
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
      <Row >
        <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Your Participation in Srijan 2020" style={{ width: '100%' }}>
              <Chart></Chart>
          </Card>
        </Col>
        <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Your Badge" style={{ width: '100%' }}>

          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;