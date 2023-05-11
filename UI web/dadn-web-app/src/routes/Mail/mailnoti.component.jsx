import { Fragment } from "react";
import { Col, Row } from "antd";
import SearchBarMail from "../../Components/Mailnoti Component/searchbar.component";
import Mail from "../../Components/Mailnoti Component/mail.component";
const style = {
  // background: '#F5F5F5',
  padding: '8px 20px',
  borderRadius: '8px',
  margin: '10px'
};

function MailNoti() {
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
        <Col className="gutter-row" span={24}>
          <div className="searchBar" style={{marginTop: 20}}>
            <SearchBarMail/>
          </div>
          <div className="filterrow" style={{marginTop: 20}}>
          </div>
          <div className="mail" style={{marginTop: 20}}>
            <Mail></Mail>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default MailNoti;
