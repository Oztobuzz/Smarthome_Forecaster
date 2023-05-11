import React, { Fragment } from "react";
import { Col, Row } from "antd";
import TemperaturePredictedContent from "./temperaturepredictedcontent.component";
import ButtonHeader from "./buttonheader.component";
import { DatePicker, Select, Space, TimePicker } from 'antd';
import { useState } from "react";
const style = {
    padding: '8px 20px',
    borderRadius: '8px',
    margin: '10px'
  };
const TemperaturePredicted = () => {
  const [type, setType] = useState('temp')
  return (
    <Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={18}>
          <div style={{...style, backgroundColor: '#F5F5F5', paddingRight: '0'}}>
           <TemperaturePredictedContent type={type}/>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={{...style, margin:10, alignContent:"right", padding:'8px 0px' }}>
        <Select value={type} onChange={setType}>
                <Option value="humid">Humid</Option>
                <Option value="temp" >Temperature</Option>
        </Select>
                  </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TemperaturePredicted;
