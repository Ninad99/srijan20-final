import React, { useEffect, useState, useContext } from 'react';
// import { firestore } from '../../firebase/config';
// import { getUserInfo } from '../../firebase/utility';
import { AuthContext } from '../../context/authContext';
import { getEventData } from '../../firebase/utility';
import { Row, Col, Card, Spin, Icon } from 'antd';
import './EventDisplay.css';

const EventDisplay = (props) => {
  const { params: { eventName } } = props.match;
  const { currentUser } = useContext(AuthContext);
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [showRegisterSpinner, setShowRegisterSpinner] = useState(false);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    getEventData(eventName)
      .then(data => {
        setEventData(data);
        // if (data.registeredUsers.includes(currentUser.uid)) {
        //   setIsRegistered(true);
        // }
      })
  }, [eventName, currentUser.uid]);

  // const handleEventRegister = async () => {
  //   setShowRegisterSpinner(true);
  //   const userId = currentUser.uid;
  //   try {
  //     const eventInfo = await getEventData(eventName);
  //     const updatedUsers = [...eventInfo.registeredUsers, userId];
  //     firestore.collection('events').doc(eventName).update({
  //       ...eventInfo,
  //       registeredUsers: updatedUsers
  //     });
  //     const userInfo = await getUserInfo(currentUser.uid);
  //     const updatedUserRegistrations = [...userInfo.registeredEvents, eventName];
  //     firestore.collection('users').doc(userId).update({
  //       ...userInfo,
  //       registeredEvents: updatedUserRegistrations
  //     });
  //     setIsRegistered(true);
  //     setShowRegisterSpinner(false);
  //   } catch (err) {
  //     console.log(err);
  //     setShowRegisterSpinner(false);
  //   }
  // }

  return (
    <div>
      <Row>
        <Col md={24} style={{ padding: '.5rem', textAlign: 'center'}}>
          {eventData ? (
            <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                title={eventData.eventName}>
              <Row>
                <Col md={24} className="d-flex justify-content-center align-items-center eventInfo">
                  <p style={{ color: '#00ebff', textAlign: 'left' }}>
                    {eventData.eventDate ? <><strong><Icon type="calendar" /> Date: {eventData.eventDate}</strong><br /><br /></> : null}
                    {eventData.eventTime ? <><strong><Icon type="clock-circle" /> Time: {eventData.eventTime}</strong><br /><br/></> : null}
                    <strong><Icon type="info-circle" /> Description: </strong><br />
                    {eventData.eventDescription}
                  </p>
                </Col>
                <Col md={24}>
                  <Row>
                    <Col lg={16}>
                      <div className="event-img-container">
                        <img src={eventData.photoURL ? eventData.photoURL : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feagleeyevr.com%2Fwp-content%2Fuploads%2F2017%2F04%2Ftypes-of-drones.png&f=1&nofb=1"} alt={eventName}></img>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <br />
                      <div className="events-poc-display" style={{ color: '#00ebff' }}>
                        {eventData.eventCoordinators.map((c, index) => {
                          return <strong key={index}><Icon type="phone" /> {c}</strong>
                        })}
                        <br />
                        <span className="btn">
                          <p style={{ padding: 0, margin: 0 }}>Registrations will open soon!</p>
                        </span>
                        {/* {isRegistered ? (
                          <span className="btn">
                            <p style={{ padding: 0, margin: 0 }}>You've registered for this event</p>
                          </span>
                        ) : (
                          <div className="flex-container">
                            <span className="btn" onClick={handleEventRegister}>
                              <p style={{ padding: 0, margin: 0 }}>Register</p>
                            </span>
                            {showRegisterSpinner ? <Spin /> : null}
                          </div>
                        )} */}
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