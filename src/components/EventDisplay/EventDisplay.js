import React, { useEffect, useState } from 'react';
import { getEventData } from '../../firebase/utility';
import { Row, Col, Card, Spin, Icon } from 'antd';
import './EventDisplay.css';

const EventDisplay = (props) => {
  const { params: { eventName } } = props.match;
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    getEventData(eventName)
      .then(data => {
        setEventData(data);
      })
  }, [eventName])

  return (
    <div>
      <Row>
        <Col md={24} className="d-flex justify-content-center align-items-center" style={{ padding: '.5rem', textAlign: 'center'}}>
          {eventData ? (
            <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                title={eventName}>
              <Row>
                <Col md={24} className="d-flex justify-content-center align-items-center">
                  <p style={{ color: '#00ebff', textAlign: 'left' }}>
                    <strong><Icon type="calendar" /> Date: {eventData.eventDate}</strong><br /><br />
                    <strong><Icon type="clock-circle" /> Time: {eventData.eventTime}</strong><br /><br/>
                    <strong><Icon type="info-circle" /> Description: </strong><br />
                    {eventData.eventDescription}
                  </p>
                </Col>
                <Col md={24} className="d-flex justify-content-center align-items-center">
                  <Row>
                    <Col lg={12}>
                      <div className="event-img-container">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feagleeyevr.com%2Fwp-content%2Fuploads%2F2017%2F04%2Ftypes-of-drones.png&f=1&nofb=1" alt={eventName}></img>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <br />
                      <div className="events-poc-display" style={{ color: '#00ebff' }}>
                        {eventData.eventCoordinators.map((c, index) => {
                          return <strong key={index}><Icon type="phone" /> {c}</strong>
                        })}
                        <br />
                        <span className="btn">
                          <p style={{ padding: 0, margin: 0 }}>Register</p>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          ) : <Spin />}
        </Col>
      </Row>
    </div>
  )
}

export default EventDisplay;