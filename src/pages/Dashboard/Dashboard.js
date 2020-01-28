import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
// import PolarChart from '../../components/PolarChart/PolarChart';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
import './Dashboard.css';
const { Meta } = Card;

const Dashboard = props => {
  return (
    <section className="dashboard">
      <Row>
        <Col md={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                title="Your registered events"> 
            <ul className="custom-carousel">
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/b"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/b12"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/btrdhb"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/bhkj12"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
            </ul>
          </Card>
        </Col>
        <Col md={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                title="Your registered events"> 
            <ul className="custom-carousel">
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/sac"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/ascdvg12"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/gdbgdtfdhrdhb"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
              <li className="custom-carousel-item">
                <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none', color:'#00ebff' }}
                style={{ width: '200px',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color:'#00ebff' }}  
                size="small" title="Event title"
                cover={
                  <img
                    alt="example"
                    src="https://robohash.org/gfbgbkj12"
                    style={{ width: '75%', marginRight: 'auto'}}
                  />
                }
                actions={[
                  <Icon className="icons" type="setting" key="setting" />,
                  <Icon className="icons" type="edit" key="edit" />,
                  <Icon className="icons" type="ellipsis" key="ellipsis" />,
                ]}
                >
                  <Meta
                      title={<span style={{ color: "#00ebff" }}>Card title</span>}
                      description={<span style={{ color: "#00ebff" }}>This is the description</span>}
                    />
                </Card>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row >
        <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Your Participation in Srijan 2020"
                headStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{ backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%', backgroundColor: 'transparent', border: 'none' }}>
            <DoughnutChart></DoughnutChart>
          </Card>
        </Col>
        <Col lg={12} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
          <Card title="Your Badge"
                headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Dashboard;