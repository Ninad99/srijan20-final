import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Card, Form, Input, Alert, Spin, Icon, Button } from 'antd';
import { AuthContext } from '../../context/authContext';
import { getUserInfo } from '../../firebase/utility';
import { firestore } from '../../firebase/config';
import gameDevWorkshop from '../../assets/Images/gamedev-workshop-unity.jpg';
import './Workshops.css';

const isValid = (department, college, year, phoneNo) => {
  return (department !== "") && (college !== "") && (year !== "") && (phoneNo !== "");
}

const Workshops = props => {
  const [userInfo, setUserInfo] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    firestore.collection('workshopOrders').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          const data = doc.data();
          if (data.userId === currentUser.uid) {
            setIsRegistered(true);
          }
        })
      })
    getUserInfo(currentUser.uid)
      .then(data => setUserInfo(data))
      .catch(err => console.log(err))
  }, [currentUser.uid])

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { username, department, college, year, email, phoneNumber } = event.target.elements;
    if (isValid(department.value, college.value, year.value, phoneNumber.value)) {
      const date = new Date();
      const data = {
        date: date.toDateString() + " " + date.toTimeString(),
        name: username.value,
        department: department.value,
        college: college.value,
        year: year.value,
        email: email.value,
        phoneNo: phoneNumber.value,
        paymentStatus: "pending",
        userId: currentUser.uid,
        amount: 400
      }
      firestore.collection('workshopOrders').add(data)
        .then(docRef => {
          window.location.href = `http://localhost:2000/workshops/txn?orderId=${docRef.id}&amount=400`;
        })
        .catch(err => console.log(err));
      console.log(data);
    } else {
      setFormError(true);
      setIsLoading(false);
    }
  }

  return (
    <section className="workshops">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="Workshops">
            <Row>
              <Col lg={12}>
                <h2 className="workshop-title">Game Development Workshop using Unity</h2>
                <h5 className="workshop-subtitle">
                  <Icon type="calendar" /> Date: 15th February&nbsp;|&nbsp;
                  <Icon type="clock-circle" /> Time: 10AM to 5PM&nbsp;|&nbsp;
                  <Icon type="home" /> Venue: TEQIP 101
                </h5>
                <div className="workshop-img-container">
                  <img src={gameDevWorkshop} alt="gameDev workshop with Unity" />
                </div>
              </Col>
              <Col lg={12} className="workshop-info">
              {userInfo ? (
                <Form onSubmit={handleSubmit} layout="horizontal" className="workshop-form">
                  {formError ? <Alert message="Form fields can't be blank!" type="error" /> : null}
                  <br />
                  <Form.Item label="Name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="username"
                      disabled
                      value={userInfo.username}
                      prefix={<Icon type="user" style={{ color: '#00ebff' }} />}
                      placeholder="Name" />
                  </Form.Item>
                  <Form.Item label="Department" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="department"
                      prefix={<Icon type="solution" style={{ color: '#00ebff' }} />}
                      placeholder="Department" />
                  </Form.Item>
                  <Form.Item label="College" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="college"
                      prefix={<Icon type="book" style={{ color: '#00ebff' }} />}
                      placeholder="College" />
                  </Form.Item>
                  <Form.Item label="Year Of Study" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="year"
                      type="number"
                      min={1} max={4}
                      prefix={<Icon type="read" style={{ color: '#00ebff' }} />}
                      placeholder="Year Of Study" />
                  </Form.Item>
                  <Form.Item label="Email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="email"
                      type="email"
                      disabled
                      value={userInfo.email}
                      prefix={<Icon type="mail" style={{ color: '#00ebff' }} />}
                      placeholder="Email" />
                  </Form.Item>
                  <Form.Item label="Phone no." labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="phoneNumber"
                      type="number"
                      prefix={<Icon type="phone" style={{ color: '#00ebff' }} />}
                      placeholder="Phone no." />
                  </Form.Item>
                  
                  {isRegistered ? (
                    <span className="btn">
                      <p style={{ padding: 0, margin: 0 }}>You've already registered for this workshop</p>
                    </span>
                  ) : (
                    <Button htmlType="submit" className="workshop-submit-btn" style={{ color: '#00ebff' }}>
                      Register and pay&nbsp;&nbsp;{isLoading ? <Spin /> : null}
                    </Button>
                  )}
                </Form>
              ) : <Spin />}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Workshops;