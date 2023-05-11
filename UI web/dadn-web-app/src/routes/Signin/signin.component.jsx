import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Fragment } from "react";
import {Col, Row} from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function SignIn() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Fragment>
    <div>
    <Row style={{height: '50vh', marginTop: '200px', marginBottom: '100px'}}>
      <Col style={{width:'100vw'}} span={24}>
      <div style={{textAlign: 'center'}}>
        <h2>WELCOME TO YOUR SMARTHOME</h2>
      </div>
      <div style={{width: '300px', marginLeft:'auto', marginRight:'auto'}}>
        
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      action="/"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button href="/" type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
      </div>
      </Col>
    </Row>

    </div>
    </Fragment>
  );
}

export default SignIn;
