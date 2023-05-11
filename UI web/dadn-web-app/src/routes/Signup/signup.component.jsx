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

function SignUp() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Fragment>
    <Row style={{height: '50vh', marginTop: '200px', marginBottom: '100px'}}>
      <Col style={{width:'100vw'}} span={24}> 
      <div style={{textAlign: 'center'}}>
        <h2>SIGN UP YOUR OWN ACCOUNT</h2>
      </div>
      <div style={{width: '300px', marginLeft:'auto', marginRight:'auto'}}>
      <Form
      name="normal_login"
      className="signup-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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
        <Button href="/signin" type="primary" htmlType="submit" className="login-form-button">
          Create
        </Button>
        Or <a href="/signin">Login now!</a>
      </Form.Item>
    </Form>
      </div>
      </Col>
      </Row>
    </Fragment>

  );
}

export default SignUp;
