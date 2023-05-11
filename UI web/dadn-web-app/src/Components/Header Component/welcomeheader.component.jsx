import React from "react";
import { Fragment } from "react";
import { Col, Row } from "antd";
import humanicon from "../../assets/humanicon.png"

const WelcomeHeader = () => {
  return (
    <Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={16}>
          <h1 style={{ margin: 0 }}>Hello User#11902</h1>
          <p>It's good to see you again</p>
        </Col>
        <Col className="gutter-row" span={8}>
          <img src={humanicon} width="150" style={{position:"absolute", bottom: '-10px'}} />
        </Col>
      </Row>    
    </Fragment>
  );
};

export default WelcomeHeader;
