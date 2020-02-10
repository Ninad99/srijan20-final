import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../firebase/utility';
import { Row, Col, Card, Icon, Spin } from 'antd';
import './Events.css';

const Events = props => {
  const [fetchedEvents, setFetchedEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(data => {
        setFetchedEvents(data);
      })
  }, [])

  return (
    <section>
      <Row>
        {fetchedEvents.length > 0 ? (
          <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
            <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                  bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                  style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                  title="Srijan Events">
              <div className="events-grid">
                {fetchedEvents.map((ev, index) => (
                  <div className="events-card" key={index}>
                    <div className="events-card-header">
                      <div style={{ width: '100%' }}>
                        <img
                          alt={ev.eventName + " poster"}
                          src={ev.photoURL}
                          style={{ width: '100%' }}/>
                      </div>
                    </div>
                    <div className="events-card-content">
                      <strong style={{ color: '#00ebff', fontSize: '1.2rem' }}>{ev.eventName}</strong>
                      <small style={{ color: '#00ebff', textTransform: 'uppercase' }}>({ev.eventType})</small>
                      <Link to={"/app/events/" + ev.id} className="events-card-visit-btn"><Icon type="export" />&nbsp;Visit page</Link>
                    </div>
                  </div>
                ))}
              </div>
              More events coming soon!
            </Card>
          </Col>
        ) : <Col span={24} className="flex-container" ><Spin /></Col>}
      </Row>
    </section>
  );
}

export default Events;