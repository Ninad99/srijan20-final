import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { Row, Col, Card, Icon, Form, Input, Button, Spin } from 'antd';
import { getUserInfo } from '../../firebase/utility';
import srijanTshirtMockup from '../../assets/Images/srijan_tshirt_mockup.png';
import './Merchandise.css';

const Merchandise = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getUserInfo(currentUser.uid)
      .then(data => setUserInfo(data))
      .catch(err => console.log(err))
  }, [currentUser.uid])

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, department, college, year, email, printName } = event.target.elements;
    const data = {
      name: username.value,
      department: department.value,
      college: college.value,
      year: year.value,
      email: email.value,
      printName: printName.value
    }
    console.log(data);
  }

  return (
  <section className="merchandise">
    <Row>
      <Col md={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
        <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
              bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
              style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
              title="Buy the official Srijan 20 merchandise">
          <Row>
            <Col lg={8}>
              <div className="merchandise-img-container">
                <img src={srijanTshirtMockup} alt="merchandise-img" />
              </div>
            </Col>
            <Col lg={16} className="merchandise-info">
              {userInfo ? (
                <Form onSubmit={handleSubmit} layout="horizontal" className="merchandise-form">
                  <Form.Item label="Name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="username"
                      disabled
                      value={userInfo.username}
                      prefix={<Icon type="user" style={{ color: '#00ebff' }} />}
                      placeholder="Name" />
                  </Form.Item>
                  <Form.Item label="Department" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="department"
                      prefix={<Icon type="solution" style={{ color: '#00ebff' }} />}
                      placeholder="Department" />
                  </Form.Item>
                  <Form.Item label="College" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="college"
                      prefix={<Icon type="book" style={{ color: '#00ebff' }} />}
                      placeholder="College" />
                  </Form.Item>
                  <Form.Item label="Year Of Study" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="year"
                      type="number"
                      min={1} max={4}
                      prefix={<Icon type="read" style={{ color: '#00ebff' }} />}
                      placeholder="Year Of Study" />
                  </Form.Item>
                  <Form.Item label="Email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="email"
                      type="email"
                      disabled
                      value={userInfo.email}
                      prefix={<Icon type="mail" style={{ color: '#00ebff' }} />}
                      placeholder="Email" />
                  </Form.Item>
                  <Form.Item label="Print name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="printName"
                      prefix={<Icon type="user" style={{ color: '#00ebff' }} />}
                      placeholder="Name to be printed on T-shirt" />
                  </Form.Item>
                  <Button htmlType="submit" className="merchandise-submit-btn" style={{ color: '#00ebff' }}>
                    Proceed to checkout
                  </Button>
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

export default Merchandise;