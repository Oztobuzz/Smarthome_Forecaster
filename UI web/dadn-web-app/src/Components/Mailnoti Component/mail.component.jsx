import { Fragment } from "react";
import { Col, Row } from "antd";
const style = {
  background: "#F5F5F5",
  padding: "8px 20px",
};

const listofcontent = [1, 2, 3, 4, 5];

const Mail = () => {
  return (
    <div>
      {listofcontent.map(() => (
        <Fragment>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
            style={{ ...style,margin:'0px', paddingRight: 0, height: "40px", borderBottom:'0.5px solid rgba(0,0,0,10%)'}}
          >
            <Col className="gutter-row" span={1} style={{ height: "50px" }}>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ height: "15px", width: "15px" }}
              />
            </Col>
            <Col className="gutter-row" span={3}>
              Name is in here
            </Col>
            <Col className="gutter-row" span={1}></Col>
            <Col
              className="gutter-row"
              span={12}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                height: "40px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quibusdam possimus debitis reprehenderit quisquam
              laboriosam excepturi nisi illo. Minima nostrum tenetur ipsa
              repudiandae et esse iusto animi sapiente ab facere!
            </Col>
            <Col className="gutter-row" span={1}></Col>
            <Col className="gutter-row" span={6}>
              Date amkdsakdsakdsnak
            </Col>
          </Row>
        </Fragment>
      ))}
    </div>
  );
};

export default Mail;
