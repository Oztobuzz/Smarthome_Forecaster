import React, { useState } from "react";
import { Col, Row } from "antd";
import { useEffect } from "react";
const style = {
    padding: '0px',
    margin: '0px'
  };

  

  

const TemperaturePredictedContent = ({type}) => {
    const [temp, setTemp] = useState(0)    
    function getpredicted() {
      const url = `http://localhost:8000/analyze_${type}`;
      const options = {
        method: "POST",
        redirect: 'follow',
        'Content-Type': 'application/json',
      };
    
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to get predicted data.");
          }
          return response.json()
        })
        .then(result => {
          setTemp((Math.round(result[`prediction_${type}`]* 100) / 100).toFixed(2))
        })
        .catch(error => {
          console.error(error);
        });
    }
    useEffect(()=>{
      let intervalid;
      getpredicted()
      const intervalTime = 10000;
      // Set the interval to fetch data
      intervalid = setInterval(getpredicted, intervalTime);
      return () => {
        clearInterval(intervalid);
      };
    },[type])
    if(type === "temp"){
    return(
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={16}>
           <h2 style= {{...style}}>Temperature 5 minutes later:</h2>
        </Col>
        <Col className="gutter-row" span={8}>
          <h2 style={{...style}}>{`${temp}`} &deg;C</h2>
        </Col>
      </Row>
    )
    }
    else{
      return(
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={16}>
           <h2 style= {{...style, textAlign:'left'}}>Humidity 5 minutes later:</h2>
        </Col>
        <Col className="gutter-row" span={8}>
          <h2 style={{...style}}>{`${temp}`} %</h2>
        </Col>
      </Row>
    )
    }
}

export default TemperaturePredictedContent