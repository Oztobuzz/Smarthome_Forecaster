import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

var myHeaders = new Headers();
myHeaders.append("X-AIO-Key", "aio_DSPg61Yj2l0WmcXhnrmC6BnfMaTG");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const DemoLine = (props) => {
  // const iotType = props.iotType
  // const date = props.type
  let dataplot = [];
  const {selectedDate,iotType} = props
  const [dataAda, setData] = useState(null);
  const [datademo, setDatademo] = useState(null)
  const [dateObject,setDateObject] = useState(selectedDate)
  useEffect(()=>{
    if(selectedDate === null)
    {
      setDateObject(new Date());
    }else{
      setDateObject(new Date(selectedDate.$d))
    }
  },[selectedDate])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://io.adafruit.com/api/v2/meimei_doan/feeds/${iotType}/data`, requestOptions);
      const responseData = await response.json();
      setData(responseData);
    };
    
    fetchData();
    let intervalid;
    const intervalTime = 10000;
    // Set the interval to fetch data
    intervalid = setInterval(fetchData, intervalTime);
    return () => {
      clearInterval(intervalid);
    };
    
  }, [iotType]);
  
  useEffect(() => {
    
    if (dataAda != null) {
      dataAda.map((datapoint) => {
        let dataDate = new Date(datapoint.created_at)
        const datamonth = dataDate.getMonth() + 1; 
        const dataday = dataDate.getDate();
        const hour = dataDate.getHours()
        const min = dataDate.getMinutes()
        const month = dateObject.getMonth() + 1; 
        const day = dateObject.getDate();
        const datatime = dataDate.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
        if(dataday == day && datamonth == month){
          dataplot.push({ time: datatime, value: parseFloat(datapoint.value) })
        }
        })
        dataplot = dataplot.reverse()
      setDatademo(dataplot)
      // setDate(new Date(Date.parse(data)))
    }
  }, [dataAda, dateObject]);
  // console.log(datademo)
    if(datademo === null){
      return <h3>Fetching data ...</h3>
    }
    else if(datademo.length === 0){
      return <h3>No data to show</h3>
    }
    // else if(dataplot === null || dataplot.length === 0){
    //   return <h3>No data on this day</h3>
    // }
    else {
      console.log("I am in here")
      const config = {
        data: datademo,
        xField: 'time',
        yField: 'value',
        label: {},
        point: {
          size: 0,
          shape: 'circle',
          style: {
            fill: 'black',
          },
        },
        tooltip: {
          showMarkers: false,
        },
        state: {
          active: {
            style: {
              shadowBlur: 4,
              stroke: '#000',
              fill: 'red',
            },
          },
        },
        lineStyle: {
          stroke:'black',
          lineWidth: 2
        },
        interactions: [
          {
            type: 'marker-active',
          },
        ],
        smooth: true,
      };
      return <Line {...config} />
    }
    }

export default DemoLine;