import { Col, Row } from "antd";

const TelephoneDisplay = ({ style, styleoftitle }) => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      style={{margin: 0 }}
    >
      <Col className="gutter-row" style={{ padding: "0px" }} span={24}>
        <Row>
          <Col span={3}>
            <div className="firstname" style={styleoftitle}>
              <b>Telephone</b>
            </div>
          </Col>
          <Col span={21}>
            <div className="lastnameinput" style={{ ...style }}>
              <b>+84 123456789</b>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TelephoneDisplay;
