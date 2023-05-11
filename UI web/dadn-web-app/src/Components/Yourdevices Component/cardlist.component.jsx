import Card from "./card.component";
import { Col, Row } from "antd";
import { Fragment } from "react";
const style = {
  background: "#F5F5F5",
  padding: "8px 20px",
  borderRadius: "8px",
  marginTop: "10px",
};
const products = [{
  "id": 1,
  "title": "Fan",
  "description": "Your only fan",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Kangaroo",
  "category": "smartphones"
}]
function CardList({devices}) {
  if (Array.isArray(devices)) {
  } else {
    // const { products } = devices;
    return (
      <div className="listofdevice">
        {products.map((product) => {
          // return <h2>{product.title + product.rating + product.brand + product.category}</h2>
          return (
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={24}>
                <div style={style}>
                  <Card product={product}></Card>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default CardList;
