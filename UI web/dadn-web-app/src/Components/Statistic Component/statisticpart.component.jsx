import { Fragment } from "react";
import { Col, Row, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { DatePicker, Select, Space, TimePicker } from 'antd';
import { useState } from 'react';
import DemoLine from "./lineplot.component";
import SelectTimeSpan from "./selecttimespan.component";
const style = {
  padding: "8px 16px",
  borderRadius: "8px",
  // margin: '10px'
};

const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
const StatisticComponent = () => {
  const [type, setType] = useState('Date')
  const [iotType, setIotType] = useState('humid')
  const [selectedDate, setSelectedDate] = useState(null);

  // console.log(date); // 2022-06-17T11:06:50.369Z

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date);
  };


  return (
    <Fragment>
      <h2 style={{ ...style, marginTop: "8px", marginBottom: "0px" }}>
        Your statistics
      </h2>
      <div style={{ padding: "0px 16px", margin: "0px" }}>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={12}>
            <Space>
              <Select value={type} onChange={setType}>
                <Option value="date">Date</Option>
                <Option value="weekly" disabled>Week</Option>
                <Option value="monthly" disabled>Month</Option>
              </Select>
              <PickerWithType
                type={type}
                onChange={handleDateChange}
              />
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
            </Space>
          </Col>
          <Col className="gutter-row" span={8}>
            <Space>
              <Select value={iotType} onChange={setIotType}>
                <Option value="humid">Humid</Option>
                <Option value="temp" >Temperature</Option>
                <Option value="light" >Light</Option>
              </Select>
            </Space>
          </Col>
        </Row>
      </div>
      <div style={style}>
        {/* <DemoLine selectedDate={selectedDate} iotType={iotType}></DemoLine> */}
        <DemoLine selectedDate={selectedDate} iotType={iotType}></DemoLine>
      </div>
    </Fragment>
  );
};

export default StatisticComponent;
