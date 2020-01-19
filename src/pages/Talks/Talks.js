import React from 'react';
import { Row, Col, Card , Button} from 'antd';
import Chart1 from './../../components/Chart1/Chart';

const Talks = props => {
  return (
    <>
    <Row>
     <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center', height: '400px'  }}>
     <Card title="Your Participation in Srijan 2020 Events" style={{ width: '100%', height: '100%' }}>
     <Chart1></Chart1>
     </Card>
     </Col>
     <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center', height: '400px'  }}>
     <Card title="Your Srijan 20 Events Dashboard" style={{ width: '100%', height: '100%' }}>
     <Row >
      <Col md={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <ul className="custom-carousel">
            <li className="custom-carousel-item">
              <Card size="small" title="Robotics" style={{ width: 200 }}>
              <Button style={{ marginRight: '20px' }}>Visit Event Page</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Robotics" style={{ width: 200 }}>
              <Button style={{ marginRight: '20px' }}>Visit Event Page</Button>
              </Card>
            </li>
            <li className="custom-carousel-item">
              <Card size="small" title="Robotics" style={{ width: 200 }}>
              <Button style={{ marginRight: '20px' }}>Visit Event Page</Button>
              </Card>
            </li>
          </ul>
      </Col>
      </Row>
     </Card>
     </Col>
    </Row>
    <Row>
      <Card title="Srijan 20's Special Attraction"></Card>
    </Row>
    </>
  );
}

export default Talks;