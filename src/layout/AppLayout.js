import React, { useState } from 'react';
import { Link, Switch as RouteSwitch, Route } from 'react-router-dom';
import { Layout, Dropdown, Menu, Drawer, Icon, Button } from 'antd';
import { routes } from '../routes';
import Particles from 'react-particles-js';
import './AppLayout.css';
const { Header, Footer, Sider, Content } = Layout;
const AppLayout = props => {
  const { username, handleSignOut } = props;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const onDrawerClose = () => setDrawerVisible(false);

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="1" onClick={handleSignOut}>
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="main-layout">
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
      <Drawer
        bodyStyle={{ padding: 0, zIndex: 100 }}
        title="Srijan 20"
        placement="left"
        closable={true}
        onClose={onDrawerClose}
        visible={drawerVisible}>
        <Menu mode="inline">
          {routes.map((route, index) => {
            return (
              <Menu.Item key={index} onClick={onDrawerClose}>
                <Link to={route.layout + route.path}>
                  <Icon type={route.icon} />{route.routeName}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
      <Header className="navigation" theme="dark">
        <Icon type="menu" className="appdrawer-icon" onClick={e => setDrawerVisible(true)} />
        <span className="nav-brand">Srijan 20</span>
        <span className="nav-right">
          <Button style={{ marginRight: '20px' }}>
            <Icon type="shopping-cart" /> 
          </Button>
          <Dropdown.Button overlay={dropdownMenu}>
            <Icon type="user" /> ({username})
          </Dropdown.Button>
        </span>
      </Header>
      <Layout style={{ background: 'transparent' }}>
        <Sider className="dashboard-sider">
          <Menu mode="inline" className="dashboard-sider-menu">
            {routes.map((route, index) => {
              return (
                <Menu.Item className="menuBtn" key={index}>
                  <Link style={{ borderRight: 'none'}} className="menuBtnLink" to={route.layout + route.path}>
                    <Icon type={route.icon} />{route.routeName}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ overflowY: 'auto', background: 'transparent' }}>
          <Content>
            <RouteSwitch>
              {routes.map((route, index) => {
                return <Route key={index} path={route.layout + route.path} component={route.component} />
              })}
            </RouteSwitch>
            <Footer className="footer"><strong>Srijan 20</strong> Made with &#9829; by the Faculty of Engineering And Technology Students' Union, <br/> Jadavpur University <br/>Salt Lake Campus Plot No.8, Salt Lake Bypass, LB Block, Sector III, Salt Lake City, Kolkata 700106. </Footer>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
