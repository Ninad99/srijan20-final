import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import F5PosterOne from '../../assets/Images/F5_poster_1.jpeg';
import './Talks.css';

const Talks = props => {
  return (
    <section className="talks">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="F5">
            <Row>
              <Col lg={14}>
                <div className="talks-img-container">
                  <img src={F5PosterOne} alt="F5 Gaurav Sen" />
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
                <span className="btn">
                  <p style={{ padding: 0, margin: 0 }}>Registrations will open soon</p>
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