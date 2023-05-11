import { Fragment } from "react";
import { Col, Row } from "antd";
import Information from "../../Components/UserInfo Component/informationdisplay.component";
const style = {
  // background: "#F5F5F5",
  padding: "8px 20px",
  borderRadius: "8px",
  margin: "10px",
};

function UserInfo() {
  return (
    <Fragment>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{...style, width: "85vw", marginTop: "50px", paddingRight: 0 }}
      >
        <Col className="gutter-row" style={{}} span={24}>
          <div className="userinfoheader">
            <h1 className="userinfotext" style={{}}>
              USER INFORMATION
            </h1>
          </div>
          <div>
            <Row>
              <Col className="gutter-row" span={5}>
                <div style={{ marginTop: "40px" }}>
                  <img
                    className="profilepicture"
                    src="profilepicture.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col className="gutter-row" span={17}>
                <Information></Information>
              </Col>
              <Col className="gutter-row" span={1}></Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default UserInfo;
