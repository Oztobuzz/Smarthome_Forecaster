import { Col, Row } from "antd";
import { Fragment } from "react";
import { Input } from "antd";
import NameDisplay from "./namedisplay.component";
import DobSex from "./dob_sexdisplay.component";
import EmailDisplay from "./emaildisplay.component";
import MoreInfoDisplay from "./moreinfodisplay.component";
import TelephoneDisplay from "./telephonedisplay.component";
import SubscriptionDisplay from "./subscriptiondisplay.component";
const style = {
  background: "#F5F5F5",
  padding: "5px 10px",
  borderRadius: "8px",
  margin: "10px",
};
const styleoftitle = {
  padding: "5px 0px",
  borderRadius: "8px",
  marginTop: "10px",
};

const Information = () => {
  return (
    <Fragment>
      <h2 style={{ margin: "0px" }}>USER#11902</h2>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ margin: 0 }}
      >
        <Col
          className="gutter-row outside-container"
          style={{ padding: "0px" }}
          span={24}
        >
          <div className="name" style={{marginTop:'10px'}} >
            <NameDisplay
              style={style}
              styleoftitle={styleoftitle}
            ></NameDisplay>
          </div>
          <div className="dateofbirth gender" style={{marginTop:'10px'}}>
            <DobSex style={style} styleoftitle={styleoftitle}></DobSex>
          </div>
          <div className="email" style={{marginTop:'10px'}}>
            <EmailDisplay
              style={style}
              styleoftitle={styleoftitle}
            ></EmailDisplay>
          </div>
          <div className="moreinfodisp" style={{marginTop:'10px'}}>
            <MoreInfoDisplay
              style={style}
              styleoftitle={styleoftitle}
            ></MoreInfoDisplay>
          </div>
          <div className="teledisp" style={{marginTop:'10px'}}>
            <TelephoneDisplay
              style={style}
              styleoftitle={styleoftitle}
            ></TelephoneDisplay>
          </div>
          <div className="subdisp" style={{marginTop:'10px'}}>
            <SubscriptionDisplay
              style={style}
              styleoftitle={styleoftitle}
            ></SubscriptionDisplay>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Information;
