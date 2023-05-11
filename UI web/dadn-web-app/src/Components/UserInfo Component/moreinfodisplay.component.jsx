import { Col, Row } from "antd";

const MoreInfoDisplay = ({ style, styleoftitle }) => {
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
              <b>More Information</b>
            </div>
          </Col>
          <Col span={21}>
            <div className="lastnameinput" style={{ ...style }}>
              <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut odio amet, dolore porro molestiae perspiciatis sit minima neque nihil doloribus harum qui autem assumenda consequuntur natus fugiat quos quaerat?</b>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MoreInfoDisplay;
