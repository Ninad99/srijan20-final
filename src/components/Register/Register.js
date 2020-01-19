import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Alert, Spin } from 'antd';
import firebase from '../../firebase/config';
import './Register.css';

const isValid = (email, passwd) => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const validEmail = emailRegex.test(email);
  const validPasswd = passwd.length >= 6;
  return validEmail && validPasswd;
}

const Register = props => {
  const { history, writeUserData } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  const handleRegister = useCallback(async (userName, email, password, year, department) => {
    try {
      const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password);
      writeUserData(userCredentials.user.uid, userName, email, year, department);
      setIsLoading(false);
      history.push('/app');
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, [history, writeUserData]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const { username, email, password, year, department } = e.target.elements;
    if (isValid(email.value, password.value)) {
      handleRegister(username.value, email.value, password.value, year.value, department.value);
      setFormError(false);
    } else {
      setFormError(true);
      setIsLoading(false);
    }
  }, [handleRegister]);

  return (
    <section className="register">
      <Form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        {formError ? <Alert message="Invalid email or password!" type="error" /> : null}
        {error ? <Alert message={error.message} type="error" /> : null}
        <br />
        <Form.Item>
          <Input name="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
        </Form.Item>
        <Form.Item>
          <Input name="year" type="number" min={1} max={4} prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Year" />
        </Form.Item>
        <Form.Item>
          <Input name="department" prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Department" />
        </Form.Item>
        <Form.Item>
          <Input name="email" type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Input name="password" type={showPassword ? "text" : "password"} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
          <Checkbox onChange={e => setShowPassword(!showPassword)}>Show Password</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="register-form-button">
          Register
        </Button>&nbsp;&nbsp;&nbsp;
        {isLoading ? <Spin /> : null}
        <br /><br />
        Already have an account?&nbsp;<Link to="/login">Login</Link>
        <hr />
        <div className="altSignIn" onClick={handleGoogleSignIn}>
          <Icon type="google" /> Sign In with Google
        </div>
        {/* <div className="altSignIn">
          <Icon type="facebook" /> Sign In with Facebook
        </div> */}
      </Form>
    </section>
  );
}

export default withRouter(Register);