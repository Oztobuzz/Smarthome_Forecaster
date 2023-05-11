import { Col, Row } from "antd";
import ButtoninCard from "./buttonincard.component";
// const style = {
//   background: "#F5F5F5",
//   padding: "8px 20px",
//   borderRadius: "8px",
//   margin: "10px",
// };



// product.title + product.rating + product.brand + product.categor
function UserCard({person}) {
  console.log("usercard",person);
  return (
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={4}>
        <div>{person.id}</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div>{person.name}</div>
      </Col>
      <Col className="gutter-row" span={4}>
        {/* <div>{person.id}</div> */}
      </Col>
      <Col className="gutter-row" span={8}>
        <div>{person.type}</div>
      </Col>
    </Row>
  );
}

export default UserCard;
