import React from 'react';
import { Row, Col, Card } from 'antd';

const Team = props => {
  return (
    <section className="team">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="Team">
            This section will be updated soon!
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Team;