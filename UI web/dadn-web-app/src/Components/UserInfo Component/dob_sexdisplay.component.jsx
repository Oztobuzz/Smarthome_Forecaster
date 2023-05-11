import { Col, Row } from "antd";


const DobSex = ({style, styleoftitle}) => {
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
      <Col className="gutter-row" style={{ padding: "0px" }} span={13}>
        <Row>
          <Col span={5}>
            <div className="firstname" style={styleoftitle}>
              <b>Date of birth</b>
            </div>
          </Col>
          <Col span={19}>
            <div className="lastnameinput" style={{ ...style }}>
              <b>19/05/1990</b>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="gutter-row" style={{ padding: "0px" }} span={1}></Col>
      <Col className="gutter-row" style={{ padding: "0px" }} span={10}>
        <Row>
          <Col span={4}>
            <div className="lastname" style={styleoftitle}>
              <b>Gender</b>
            </div>
          </Col>
          <Col span={20}>
            <div className="lastnamedisplay" style={{ ...style }}>
              <b>Male</b>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DobSex;
