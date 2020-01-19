import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Card, Form, Input, Icon, Skeleton, Button, notification } from 'antd';
import './Profile.css';
import { AuthContext } from '../../context/authContext';
import { getUserInfo, writeUserData } from '../../firebase/utility';

const Profile = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [inputYear, setInputYear] = useState(-1);
  const [inputDepartment, setInputDepartment] = useState('');
  const [inputCollege, setInputCollege] = useState('');
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const { username, email, year, college, department } = e.target.elements;
    writeUserData(currentUser.uid, username.value, email.value, year.value, department.value, college.value);
    notification['success']({
      message: 'Success!',
      description: 'Your profile has been updated!',
      duration: 2
    })
  }

  useEffect(() => {
    getUserInfo(currentUser.uid)
      .then(user => {
        setUserInfo(user);
        setInputYear(user.year);
        setInputDepartment(user.department);
        setInputCollege(user.college);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [currentUser])

  return (
    <section className="profile">
      <Row>
        <Col lg={15} style={{ padding: '.5rem' }}>
          <Card title="Your info" style={{ width: '100%' }}>
            {isLoading ? <Skeleton active /> : (
              <Form className="profile-form" layout="horizontal" onSubmit={handleSubmit}>
                <Form.Item label="Name" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    name="username"
                    disabled
                    value={userInfo.username}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Name" />
                </Form.Item>
                <Form.Item label="Year" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    name="year"
                    type="number"
                    min={1} max={4}
                    value={inputYear}
                    onChange={e => setInputYear(e.target.value)}
                    prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Year" />
                </Form.Item>
                <Form.Item label="College" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    name="college"
                    value={inputCollege}
                    onChange={e => setInputCollege(e.target.value)}
                    prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="College" />
                </Form.Item>
                <Form.Item label="Department" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    name="department"
                    value={inputDepartment}
                    onChange={e => setInputDepartment(e.target.value)}
                    prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Department" />
                </Form.Item>
                <Form.Item label="Email" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    name="email"
                    type="email"
                    disabled
                    value={userInfo.email}
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email" />
                </Form.Item>
                <Button htmlType="submit" type="primary" block>
                  Update your info
                </Button>
              </Form>
            )}
          </Card>
        </Col>
        <Col lg={9} style={{ padding: '.5rem', backgroundColor: 'blue' }}>
          <Card title="User"></Card>
        </Col>
      </Row>
    </section>
  );
}

export default Profile;