import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from 'antd';
import fgimg from '../../assets/Images/fg-landing.png';
import './Landing.css';

const { Title } = Typography;

const Landing = props => {
  const { isAuthenticated } = props;
  let fgImage;
  useEffect(() => {
    
  }, [])

  return (
    <section className="landing">
      <img id="fg-img" className="fgimg" src={ fgimg } alt="landing-fg" />
      <Title style={{ color: '#fafafa', zIndex: 200 }}>Srijan 20</Title>
      <div style={{ zIndex: 201 }}>
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