import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import fgimg from '../../assets/Images/fg-landing.png';
import Particles from 'react-particles-js';
import './Landing.css';

import LoginForm from '../../components/Login/Login';
import RegisterForm from '../../components/Register/Register';

const { Title } = Typography;

const Landing = props => {
  const { isAuthenticated, username } = props;
  const [showForm, setShowForm] = useState(null);

  return (
    <section className="landing">
      <Particles className="particles"
        params={{
          "particles": {
            "number": {
                "value": 300,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 5,
                "random": true
            },
            "move": {
                "direction": "bottom",
                "out_mode": "out"
            },
            "line_linked": {
                "enable": false
            }
          },
          "interactivity": {
            "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
            },
            "modes": {
                "repulse": {
                    "particles_nb": 10
                }
            }
          }
        }}
        style={{ height: '100vh', width: '100%' }} />
      <img id="fg-img" className="fgimg" src={ fgimg } alt="landing-fg" />
      {!showForm ? (<div className="landing-actions">
        <Title style={{ color: '#fafafa' }} className="landing-actions-heading">Srijan 20</Title>
        <div className="landing-actions-main">
          {isAuthenticated ? (
            <Link to="/app/dashboard">
              <span className="btn">
                <p style={{ padding: 0, margin: 0 }}>Go to Dashboard ({username})</p>
              </span>
            </Link>) : (
            <>
              <span className="btn" style={{ marginRight: '1rem' }} onClick={e => setShowForm('login')}>
                <p style={{ padding: 0, margin: 0 }}>Login</p>
              </span>
              <span className="btn" onClick={e => setShowForm('register')}>
                <p style={{ padding: 0, margin: 0 }}>Register</p>
              </span>
            </>
          )}
        </div>
      </div>) : null}
      {showForm === 'login' ? <LoginForm setShowForm={setShowForm} /> : (
        showForm === 'register' ? <RegisterForm setShowForm={setShowForm} /> : null
      )}
    </section>
  )
}

export default Landing;