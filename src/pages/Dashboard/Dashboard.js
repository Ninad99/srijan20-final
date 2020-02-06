import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { getUserInfo, getEventData } from '../../firebase/utility';
import { Row, Col, Card, Spin } from 'antd';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
import './Dashboard.css';
const { Meta } = Card;

const Dashboard = props => {
  const { currentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    getUserInfo(currentUser.uid)
      .then(async userDetails => {
        setUserInfo(userDetails)
        if (userDetails.registeredEvents.length > 0) {
          const userEvents = [];
          for (const ev of userDetails.registeredEvents) {
            try {
              const eventData = await getEventData(ev);
              userEvents.push(eventData);
            } catch (err) {
              console.log(err);
            }
          }
          console.log(userEvents);
          setUserEvents(userEvents);
        }
      })
      .catch(err => console.log(err));
  }, [currentUser.uid])

  return (
    <section className="dashboard">
      <Row>
        <Col md={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
        {userInfo ? (
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                title="Your registered events">
            {userInfo.registeredEvents.length === 0 ? (
              <div style={{ padding: '2rem 0', color: '#00ebff' }}>
                <strong>You have not registered for any events yet</strong>
              </div>
            ) : (
              <ul className="custom-carousel">
              {userEvents.map((ev, index) => (
                <li className="custom-carousel-item" key={index}>
                  <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                        bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                        style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                        size="small" title={ev.eventName}
                        cover={
                          <div style={{ width: '100%', padding: '1rem 0' }}>
                            <img
                              alt="example"
                              src={ev.photoURL ? ev.photoURL : "https://robohash.org/" + ev.id}
                              style={{ width: '100%', height: '40%' }}/>
                          </div>
                        }>
                    <Meta
                        title={<span style={{ color: "#00ebff", textTransform: 'uppercase' }}>Event type - {ev.eventType}</span>}/>
                  </Card>
                </li>
              ))}
              </ul>
            )}
          </Card>
          ) : <Spin />}
        </Col>
      </Row>
      <Row >
        <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Srijan 20 events"
                headStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%', backgroundColor: 'transparent', border: 'none' }}>
            <DoughnutChart />
          </Card>
        </Col>
        <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Your participation in Srijan 20"
                headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}>
            This section will be updated soon!
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;