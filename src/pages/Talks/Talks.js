import React, { useState } from 'react';
import { Row, Col, Card, Icon, Modal, Button, Spin } from 'antd';
import F5PosterOne from '../../assets/Images/F5_poster_1.jpeg';
import F5PosterTwo from '../../assets/Images/f5_poster_2-min.jpeg';
import './Talks.css';

const Talks = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalLoading, setModalLoading] = useState(true);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <section className="talks">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="F5">
            <Modal 
              className="f5-registration-modal"
              title="F5 registration"
              visible={modalVisible}
              onOk={() => console.log('ok')}
              onCancel={hideModal}
              footer={[
                <Button key="back" type="primary" onClick={hideModal}>
                  Go back
                </Button>
              ]}>
              {modalLoading ? <Spin /> : null}
              <iframe
                className="f5-reg-iframe"
                title="gaurav-sen-talk"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdjlbe1Fo4vUznJjN5M55Ou2_8E3MlPZcQNOxTBHXUuCDUUHQ/viewform?embedded=true"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                onLoad={e => setModalLoading(false)}>Loading…</iframe>
            </Modal>
            <Row>
              <Col lg={14}>
                <div className="talks-img-container">
                  <img src={F5PosterOne} alt="F5 One" />
                </div>
              </Col>
              <Col lg={10} className="talks-info">
                <h5 className="talks-subtitle">
                  <Icon type="calendar" /> Date: 5th March<br />
                  <Icon type="phone" /> Soham Das (6296709930)&nbsp;&nbsp;|&nbsp;&nbsp;Soumya Deep Roy (6291352405)
                </h5>
                <p>
                  "All glory comes from daring to begin"
                  <br /><br />
                  We've taken the quoted words quite literally and challenged ourselves to churn out the best in Srijan every year, since its inception.
                  This year, we unveil 'F5'- a talk session comprising of speakers from diverse backgrounds, intended to hit the refresh button of your system, before you take the plunge into the city's biggest techfest.
                  <br /><br />
                  The first in our impressive lineup is none other than the Youtuber Gaurav Sen, a well known face in the coding circle.
                  Famous for his remarkably lucid explanation of algorithms and system design, and having been a part of both Uber and DirectI teams in the past, his reputation precedes him.
                  Make sure you reach Gandhi Bhavan early enough to hear him speak on "Interview Preparation using Competitive Programming" , before a rush takes over!
                  <br /><br />
                  #Srijan_20<br />
                  #tech_enthusiasts_assemble
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={14}>
                <div className="talks-img-container">
                  <img src={F5PosterTwo} alt="F5 Two" />
                </div>
              </Col>
              <Col lg={10} className="talks-info">
                <h5 className="talks-subtitle">
                  <Icon type="calendar" /> Date: 5th March<br />
                  <Icon type="phone" /> Soham Das (6296709930)&nbsp;&nbsp;|&nbsp;&nbsp;Soumya Deep Roy (6291352405)
                </h5>
                <p>
                "They’re not looking for a story that tells them who they are. They already know who they are. They’re here because they want a glimpse of who they could be." -Dr. Ford
                <br /><br />
                The world is more often than not a rather miserable place. It's easy to succumb here. It's the people who show us the light at the end of the tunnel whom Srijan, Jadavpur University patronises.
                <br /><br />
                Our 2nd speaker holds similar credentials. An influencer sans parallel, he has forayed into the world of education carving a niche for himself with a subscriber count of 1.6 million.
                <br /><br />
                Unveiling the second speaker for F5, Aman Dhattarwal. He'll be there at Gandhi Bhawan on 5th March. Will you?
                <br /><br />
                #Srijan_20
                #tech_enthusiasts_assemble
                </p>
                <span className="btn" onClick={showModal}>
                  <p style={{ padding: 0, margin: 0 }}>Register</p>
                </span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Talks;