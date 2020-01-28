import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Icon } from 'antd';
const { Meta } = Card;

const Talks = props => {
  return (
    <section className="talks">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                title="Talks"> 
            <ul className="custom-carousel">
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                      bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                      style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                      size="small" title="Event title"
                      cover={
                        <img
                          alt="example"
                          src="https://robohash.org/b"
                          style={{ width: '100%', marginRight: 'auto'}}
                        />
                      }
                      actions={[
                        <Link to="/app/events/h42" style={{ color: '#00ebff' }}><Icon type="export" />&nbsp;Visit page</Link>
                      ]}>
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Talks;