import { Col, Row } from "antd";
import { Fragment } from "react";
import UserCard from "./userCard.component";
const style = {
  background: "#F5F5F5",
  padding: "8px 20px",
  borderRadius: "8px",
  marginTop: "10px",
};

const people = [
  { id: "1", name: "Nguyen Thanh Bao Danh", type: "Team leader" },
  { id: "2", name: "Nguyen Xuan Bach", type: "Member" },
  { id: "3", name: "Vo Duy Hung", type: "Member" },
  { id: "4", name: "Tran Ngoc Oanh", type: "Member" },
];

function UserList({ devices }) {
  const product = devices;
  const values = String(product.value);
  const charsValue = Array.from(values);
  return (
    <div className="listofdevice">
      {charsValue.map((value) => {
        let person = null;

        if (value === '1') {
          person = people[0];
        } else if (value === '2') {
          person = people[1];
        } else if (value === '3') {
          person = people[2];
        } else if (value === '4') {
          person = people[3];
        } else {
          return <h3>No one is here</h3>;
        }

        return (
          <Row gutter={[16, 24]} key={value}>
            <Col className="gutter-row" span={24}>
              <div style={style}>
                <UserCard person={person}></UserCard>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default UserList;
