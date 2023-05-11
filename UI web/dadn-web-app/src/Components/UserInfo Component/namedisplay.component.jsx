import { Col, Row } from "antd";


const NameDisplay = ({style, styleoftitle}) => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      style={{ margin: 0 }}
    >
      <Col className="gutter-row" style={{ padding: "0px" }} span={12}>
        <Row>
          <Col span={4}>
            <div className="firstname" style={styleoftitle}>
              <b>First name</b>
            </div>
          </Col>
          <Col span={20}>
            <div className="lastnameinput" style={{ ...style }}>
              <b>Andrew</b>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="gutter-row" style={{ padding: "0px" }} span={1}></Col>
      <Col className="gutter-row" style={{ padding: "0px" }} span={11}>
        <Row>
          <Col span={4}>
            <div className="lastname" style={styleoftitle}>
              <b>Last name</b>
            </div>
          </Col>
          <Col span={20}>
            <div className="lastnamedisplay" style={{ ...style }}>
              <b>NG</b>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NameDisplay;
