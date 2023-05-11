import React from "react";
import CurrentTemp from "./currenttemp.component";
import CurrentDevice from "./currentdevices.component";
import { Row, Col } from "antd";
const Summary = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={12}>
        <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: '8px 20px',
            borderRadius: "8px",
          }}
        >
          <CurrentTemp></CurrentTemp>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: '8px 20px',
            borderRadius: "8px",
          }}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8} style={{paddingRight: 0}}>
              <CurrentDevice></CurrentDevice>
            </Col>
            <Col className="gutter-row" span={16} style={{paddingLeft: 0}}>
              <h3 style={{ margin: "0", padding: '0px 0px' }}>DEVICES IN ACTIVE</h3> 
            </Col>
          </Row>
        </div>
        {/* <div style={{marginLeft: '10px'}}>2 devices in active</div> */}
      </Col>
    </Row>
  );
};

export default Summary;
