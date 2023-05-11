import { Col, Row } from "antd";
import ButtoninCard from "./buttonincard.component";
// const style = {
//   background: "#F5F5F5",
//   padding: "8px 20px",
//   borderRadius: "8px",
//   margin: "10px",
// };
// product.title + product.rating + product.brand + product.categor

function Card({ product}) {
//   console.log(title);
  return (
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" style={{padding:'10px 5px'}} span={4}>
        <div>{product.id}</div>
      </Col>
      <Col className="gutter-row" style={{padding:'10px 5px'}} span={4}>
        <div>{product.title}</div>
      </Col>
      <Col className="gutter-row" style={{padding:'10px 5px'}} span={8}>
        <div>{product.description}</div>
      </Col>
      <Col className="gutter-row" style={{padding:'10px 10px'}} span={4}>
        <div>{product.brand}</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div> <ButtoninCard></ButtoninCard> </div>
      </Col>
    </Row>
  );
}

export default Card;
