import React, { FC, useState } from 'react';
import { Form, Input, Button } from "antd";
import { useDispatch } from 'react-redux';
import { rules } from '../utils/rules';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const {error, isLoading} = useTypedSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = (values: any) => {
    dispatch(AuthActionCreators.login(username, password))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      onFinish={submit}
      onFinishFailed={onFinishFailed}
    >
      {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password
           value={password}
           onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

export default LoginForm;
