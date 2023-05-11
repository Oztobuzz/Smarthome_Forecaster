import React from "react";
import { Fragment } from "react";
import CardList from "./cardlist.component";
import { Col, Row } from "antd";
const style = {
  padding: "8px 20px",
};
const YourDevices = ({ devices }) => {
  return (
    <Fragment>
      <h2>Your Devices</h2>
      <div style={style}>
        <Row gutter={[16, 24]}>
          <Col style={{ padding: 0 }} className="gutter-row" span={4}>
            <h3 style={{ margin: 0 }}>ID</h3>
          </Col>
          <Col style={{ padding: 0 }} className="gutter-row" span={4}>
            <h3 style={{ margin: 0 }}>TYPE</h3>
          </Col>
          <Col style={{ padding: 0 }} className="gutter-row" span={8}>
            <h3 style={{ margin: 0 }}>DESCRIPTION</h3>
          </Col>
          <Col style={{ padding: 0 }} className="gutter-row" span={4}>
            <h3 style={{ margin: 0 }}>BRAND</h3>
          </Col>
          <Col style={{ padding: 0 }} className="gutter-row" span={4}>
            <h3 style={{ margin: 0 }}>STATE</h3>
          </Col>
        </Row>
      </div>

      <CardList devices={devices}></CardList>
    </Fragment>
  );
};

export default YourDevices;
