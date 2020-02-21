import React, { useState } from 'react';
import { Form, Input, Alert, Spin, Icon, Button, Modal } from 'antd';

const isValid = (teamName, leader, leaderPhone) => {
  return (teamName !== "") && (leader !== "") && (leaderPhone !== "");
}

const EventRegistrationForm = props => {
  const { handleEventRegister, modalVisible, hideModal, eventName, isLoading, setIsLoading, minMembers, maxMembers } = props;
  const [formError, setFormError] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const checkValid = e => {
    e.preventDefault();
    setFormError(false);
    setIsLoading(true);
    setSubmitDisabled(true);
    const { teamname, leader, leaderPhone, member2, member3 } = e.target.elements;
    if (isValid(teamname.value, leader.value, leaderPhone.value)) {
      handleEventRegister(teamname.value, leader.value, leaderPhone.value, member2.value, member3.value)
        .then(data => {
          console.log(data);
          hideModal();
          setIsLoading(false);
          setSubmitDisabled(false);
        })
        .catch(err => console.log(err));
    } else {
      setFormError(true);
      setIsLoading(false);
      setSubmitDisabled(false);
    }
  }

  return (
  <Modal
    className="event-registration-modal"
    title={eventName + " registration"}
    visible={modalVisible}
    onOk={() => console.log('ok')}
    onCancel={hideModal}
    footer={[
      <Button key="back" type="primary" onClick={hideModal}>
        Go back
      </Button>
    ]}>
    <Form onSubmit={checkValid} layout="horizontal" name="modalForm" className="workshop-form">
      {formError ? <Alert message="Form fields can't be blank!" type="error" /> : null}
      <br />
      <p>A team for this event consists of a minimum of {minMembers} member(s) and a maximum of {maxMembers} members</p>
      <Form.Item label="Team name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required
          className="event-reg-input"
          name="teamname"
          prefix={<Icon type="user" style={{ color: '#222' }} />}
          placeholder="Name" />
      </Form.Item>
      <Form.Item label="Team leader email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          className="event-reg-input"
          name="leader"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team leader email" />
      </Form.Item>
      <Form.Item label="Leader phone no." labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required
          className="event-reg-input"
          name="leaderPhone"
          type="number"
          prefix={<Icon type="phone" style={{ color: '#222' }} />}
          placeholder="Phone no." />
      </Form.Item>
      <Form.Item label="Team member 2 email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          className="event-reg-input"
          name="member2"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team member 2 email" />
      </Form.Item>
      <Form.Item label="Team member 3 email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          className="event-reg-input"
          name="member3"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team member 3 email" />
      </Form.Item>
      <Button htmlType="submit" className="workshop-submit-btn" style={{ color: '#222' }} disabled={submitDisabled}>
        Submit&nbsp;&nbsp;{isLoading ? <Spin /> : null}
      </Button>
    </Form>
  </Modal>
  );
}

export default EventRegistrationForm;