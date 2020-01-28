import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../firebase/utility';
import { Row, Col, Card, Icon, Spin } from 'antd';
const { Meta } = Card;

const Events = props => {
  const [fetchedEvents, setFetchedEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(data => {
        console.log(data);
        setFetchedEvents(data);
      })
  }, [])

  return (
    <section>
      <Row>
        {fetchedEvents.length > 0 ? (
          <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
            <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                  bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                  style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                  title="Code"> 
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
                      style={{ width: '75%', marginRight: 'auto'}}
                    />
                  }
                  actions={[
                    <Link to="/app/events/h42" style={{ color: '#00ebff' }}><Icon type="export" />&nbsp;Visit {fetchedEvents[0]}</Link>
                  ]}
                  >
                    <Meta
                        title={<span style={{ color: "#00ebff" }}>Card title</span>}
                        description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                      />
                  </Card>
                </li>
              </ul>
            </Card>
          </Col>
        ) : <Col span={24} className="flex-container" ><Spin /></Col>}
      </Row>
    </section>
  );
}

export default Events;