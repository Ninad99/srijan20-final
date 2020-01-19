import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from 'antd';
import './Landing.css';

const { Title } = Typography;

const Landing = props => {
  const { isAuthenticated } = props;

  return (
    <section className="landing">
      <Title style={{ color: '#fafafa' }}>Srijan 20</Title>
      <div>
        {isAuthenticated ? (
          <Link to="/app">
            <Button>Go to Dashboard</Button>
          </Link>) : (
            <>
              <Link to="/login" style={{ marginRight: '1rem' }}>
                <Button>Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
      </div>
    </section>
  )
}

export default Landing;