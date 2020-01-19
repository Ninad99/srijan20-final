import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from 'antd';
import fgimg from '../../assets/Images/fg-landing.png';
import Particles from 'react-particles-js';
import './Landing.css';

const { Title } = Typography;

const Landing = props => {
  const { isAuthenticated } = props;
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
      <Title style={{ color: '#fafafa', zIndex: 200 }}>Srijan 20</Title>
      <div style={{ zIndex: 201 }}>
        {isAuthenticated ? (
          <Link to="/app">
            <Button>Go to Dashboard</Button>
          </Link>) : (
            <>
              <Link to="/login" style={{ marginRight: '1rem' }}>
                <span class="btn"><p style={{ padding: 0, margin: 0 }}>Login</p></span>
              </Link>
              <Link to="/register">
                <span class="btn"><p style={{ padding: 0, margin: 0 }}>Register</p></span>
              </Link>
            </>
          )}
      </div>
    </section>
  )
}

export default Landing;