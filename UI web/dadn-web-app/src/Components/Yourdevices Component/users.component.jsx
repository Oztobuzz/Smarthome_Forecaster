import React, { useState } from "react";
import { Fragment } from "react";
import UserList from "./userlist.component";
import { Col, Row } from "antd";
import { useEffect } from "react";

var myHeaders = new Headers();
myHeaders.append("X-AIO-Key", "aio_DSPg61Yj2l0WmcXhnrmC6BnfMaTG");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
const FEED_KEY = 'vision'

const style = {
  padding: "8px 20px",
};

const YourUsers = () => {
  const [devices, setDevice] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://io.adafruit.com/api/v2/meimei_doan/feeds/${FEED_KEY}/data`,
        requestOptions
      );
      const responseData = await response.json();
      setDevice(responseData[0]);
    };
    const intervalTime = 10000;
    // Set the interval to fetch data
    fetchData()
    setInterval(fetchData, intervalTime);
  }, []);
//   console.log(devices)
  if (devices === null) {
    // console.log("fetching data")
    return(
      <Fragment>
        <h2>Users available</h2>
        <h3>Fetching data ...</h3>
      </Fragment>
    );
  } else if (devices.length === 0) {
    return(
      <Fragment>
        <h2>Users available</h2>
        <h3>No data to display</h3>
      </Fragment>
    );
  } else {
    // console.log(devices)
    return (
      <Fragment>
        <h2>Users available</h2>
        <div style={style}>
        <Row gutter={[16, 24]}>
          <Col style={{ padding: 0 }} className="gutter-row" span={4}>
            <h3 style={{ margin: 0 }}>ID</h3>
          </Col>
          <Col style={{ padding: 0 }} className="gutter-row" span={8}>
            <h3 style={{ margin: 0 }}>FULL NAME</h3>
          </Col>
          <Col style={{ padding: 0 }} className="gutter-row" span={4}>
          </Col>
          <Col style={{ padding: 0 }} className="gutter-row" span={8}>
            <h3 style={{ margin: 0 }}>ROLE</h3>
          </Col>
        </Row>
      </div>
        {/* <h2>Filter criteria</h2> */}

        <UserList devices={devices}></UserList>
      </Fragment>
    );
  }
};

export default YourUsers;
