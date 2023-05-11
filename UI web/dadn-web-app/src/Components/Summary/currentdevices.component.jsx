import React from "react";
import { useState, useEffect } from "react";

var myHeaders = new Headers();
myHeaders.append("X-AIO-Key", "aio_DSPg61Yj2l0WmcXhnrmC6BnfMaTG");

const CurrentDevice = () => {
  const [device, setDevice] = useState(0);
  function getpredicted() {
    const url = `https://io.adafruit.com/api/v2/meimei_doan/feeds/fan/data`;
    const options = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get predicted data.");
        }
        return response.json();
      })
      .then((result) => {
        let currentDev = parseFloat(result[0].value);
        setDevice(currentDev)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    let intervalid;
    getpredicted();
    const intervalTime = 2000;
    // Set the interval to fetch data
    intervalid = setInterval(getpredicted, intervalTime);
    return () => {
      clearInterval(intervalid);
    };
  }, []);
  return (
    <h1 style={{ margin: "0" }}>{`${device}`}</h1>
  );
};

export default CurrentDevice;
