import React, { useEffect, useState, useContext } from 'react';
import { database } from '../../firebase/config';
import { getUserIdFromEmail, getEventData, getUserEvents } from '../../firebase/utility';
import { AuthContext } from '../../context/authContext';
import { Row, Col, Card, Spin, Icon } from 'antd';
import './EventDisplay.css';
import EventRegistrationForm from '../EventRegistrationForm/EventRegistrationForm';

const EventDisplay = (props) => {
  const { params: { eventName } } = props.match;
  const { currentUser } = useContext(AuthContext);
  const [eventData, setEventData] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  useEffect(() => {
    getEventData(eventName)
      .then(data => {
        data.eventCoordinators = data.poc.split("\n");
        getUserEvents(currentUser.uid)
          .then(userEvents => {
            setEventData(data);
            for (let eventId in userEvents) {
              if (eventId === data.code) {
                setIsRegistered(true);
              }
            }
          })
      })

  }, [eventName, currentUser.uid]);

  const handleEventRegister = async (teamname, leader, leaderPhone, member2, member3) => {
    const memberIDs = [];
    const data = {
      lead: leader,
      leadContact: leaderPhone,
      mems: {
        0: {
          email: leader,
          uid: currentUser.uid
        }
      },
      name: teamname
    }
    memberIDs.push(currentUser.uid);
    if (member2 !== "") {
      const mem2Id = await getUserIdFromEmail(member2);
      memberIDs.push(mem2Id);
      data.mems[1] = {
        email: member2,
        uid: mem2Id
      }
    }
    if (member3 !== "") {
      const mem3Id = await getUserIdFromEmail(member3);
      memberIDs.push(mem3Id);
      data.mems[2] = {
        email: member3,
        uid: mem3Id
      }
    }
    const eventsRef = await database.ref("srijan/events/" + eventData.code + "/teams/" + teamname).set(data);
    console.log(eventsRef);
    return Promise.all(memberIDs.map(async uid => {
      return await database.ref("srijan/profile/" + uid + "/events/" + eventData.code).set({
        event: eventData.name,
        team: teamname
      });
    }))
  }

  return (
    <Row>
      <Col md={24} style={{ padding: '.5rem', textAlign: 'center'}}>
        {eventData ? (
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
              bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
              style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
              title={eventData.name}>
            <EventRegistrationForm
              maxMembers={eventData.maxts}
              minMembers={eventData.mints}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              handleEventRegister={handleEventRegister}
              eventName={eventData.name}
              modalVisible={modalVisible}
              hideModal={hideModal} />
            <Row>
              <Col md={24} className="eventInfo">
                <p style={{ color: '#00ebff', textAlign: 'left' }}>
                  {eventData.date ? <><strong><Icon type="calendar" /> Date: {eventData.date}</strong><br /><br /></> : null}
                  {eventData.time ? <><strong><Icon type="clock-circle" /> Time: {eventData.time}</strong><br /><br/></> : null}
                  <strong><Icon type="info-circle" /> Description: </strong><br />
                  {eventData.desc}
                </p>
              </Col>
              <Col md={24}>
                <Row>
                  <Col lg={16}>
                    <div className="event-img-container">
                      <img src={eventData.poster} alt={eventName + " poster"}></img>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <br />
                    <div className="events-poc-display" style={{ color: '#00ebff' }}>
                      {eventData.eventCoordinators.map((c, index) => {
                        return <strong key={index}><Icon type="phone" /> {c}</strong>
                      })}
                      <br />
                      {isRegistered ? (
                        <span className="btn">
                          <p style={{ padding: 0, margin: 0 }}>You've registered for this event</p>
                        </span>
                      ) : (
                        <div className="flex-container">
                          <span className="btn" onClick={showModal}>
                            <p style={{ padding: 0, margin: 0 }}>Register</p>
                          </span>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        ) : <Spin />}
      </Col>
    </Row>
  )
}

export default EventDisplay;