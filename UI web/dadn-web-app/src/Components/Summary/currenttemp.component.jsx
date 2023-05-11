import React from "react";
import { useState, useEffect } from "react";

var myHeaders = new Headers();
myHeaders.append("X-AIO-Key", "aio_DSPg61Yj2l0WmcXhnrmC6BnfMaTG");

const CurrentTemp = () => {
  const [temp, setTemp] = useState(0);
  function getpredicted() {
    const url = `https://io.adafruit.com/api/v2/meimei_doan/feeds/temp/data`;
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
        let currentTemp = parseFloat(result[0].value);
        setTemp((Math.round(currentTemp * 100) / 100).toFixed(1));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    let intervalid;
    getpredicted();
    const intervalTime = 10000;
    // Set the interval to fetch data
    intervalid = setInterval(getpredicted, intervalTime);
    return () => {
      clearInterval(intervalid);
    };
  }, []);
  return (
    <h1 style={{ margin: "0", textAlign: "middle" }}>{`${temp}`} &deg;C</h1>
  );
};

export default CurrentTemp;
