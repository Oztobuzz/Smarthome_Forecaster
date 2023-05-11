import { Menu, Button } from "antd";
import React, { Fragment, useState } from "react";
import { Col, Row } from "antd";
import WelcomeHeader from "../../Components/Header Component/welcomeheader.component";
import TemperaturePredicted from "../../Components/Header Component/temperaturepredicted.component";
import YourDevices from "../../Components/Yourdevices Component/devices.component";
import YourUsers from "../../Components/Yourdevices Component/users.component";
import Summary from "../../Components/Summary/summary.component";
import StatisticComponent from "../../Components/Statistic Component/statisticpart.component";
const style = {
  background: '#F5F5F5',
  padding: '8px 20px',
  borderRadius: '8px',
  margin: '10px'
};
const stylenobgcolor = {
  padding: '8px 20px',
  borderRadius: '8px',
  margin: '10px'
};
const Home = ({devices}) => {
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style = {{width: "85vw", margin: 0}}
      >
        <Col className="gutter-row" span={14}>
          <div style={{...style, marginTop: '80px' ,overflow:'visible', height: "100px"}}>
            <WelcomeHeader></WelcomeHeader>
          </div>
          <div>
            <TemperaturePredicted></TemperaturePredicted>
          </div>
          <div className="devicePart" style={{marginTop: '50px', marginLeft: '10px'}}>
            <YourDevices devices = {devices}></YourDevices>
          </div>
          <div className="UserDisplay" style={{marginTop: '10px', marginLeft: '10px'}}>
            <YourUsers></YourUsers>
          </div>
        </Col>
        {/*  */}
        {/* This will be the left part */}
        {/*  */}
        <Col className="gutter-row" span={10}>
          <div style={style}>Search bar and Icon</div>
          <div style={{margin: '10px'}}><Summary></Summary></div>
          <div><StatisticComponent></StatisticComponent></div>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
