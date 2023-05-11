import React from "react";
import { Col, Row, Button } from "antd";
import { ArrowLeftOutlined,ArrowRightOutlined } from "@ant-design/icons";
const style = {
  padding: "0px",
  margin: "0px",
};

const ButtonHeader = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col style={style} className="gutter-row" span={12}>
        <Button
          type="default"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size={"default"}
          style = {style}
        />
      </Col>
      <Col style={style} className="gutter-row" span={12}>
        <Button
          type="default"
          shape="circle"
          icon={<ArrowRightOutlined />}
          size={"default"}
          style = {style}
        />
      </Col>
    </Row>
  );
};

export default ButtonHeader;
