import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Radio, Space } from "antd";
import { useState } from "react";
import { useEffect } from "react";


const AIO_USERNAME = "meimei_doan";
const AIO_KEY = "aio_DSPg61Yj2l0WmcXhnrmC6BnfMaTG";
const FEED_NAME = "fan";
let stateoffan = 0
let retrieve = false
function publishToAdafruitIO(data) {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_NAME}/data`;
  const options = {
    method: "POST",
    headers: {
      "X-AIO-Key": AIO_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ value: data })
  };
  if(retrieve){
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to publish data to Adafruit IO.");
      }
      console.log("Data published to Adafruit IO.");
    })
    .catch(error => {
      console.error(error);
    });
  }
}

function fetchData() {
  const url = `https://io.adafruit.com/api/v2/meimei_doan/feeds/${FEED_NAME}/data`;
  const options = {
    method: "GET",
    headers: {
      "X-AIO-Key": AIO_KEY,
    },
    redirect: 'follow'
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to get data from Adafruit IO.");
      }
      return response.json(); // Parse JSON response
    })
    .then(data => {
      // Access the state value
      const state = data[0].value;
      stateoffan = state;
    })
    .catch(error => {
      console.error(error);
    });

}




const ButtoninCard = () => {
  const [size, setSize] = useState("large"); // default is 'middle'
  const [btnState, setState] = useState(false);
  const Onclick = () => {
    btnState ? setState(false) : setState(true);
  };
  function fetchData() {
    const url = `https://io.adafruit.com/api/v2/meimei_doan/feeds/${FEED_NAME}/data`;
    const options = {
      method: "GET",
      headers: {
        "X-AIO-Key": AIO_KEY,
      },
      redirect: 'follow'
    };
  
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to get data from Adafruit IO.");
        }
        return response.json(); // Parse JSON response
      })
      .then(data => {
        // Access the state value
        const state = data[0].value;
        // stateoffan = state;
        stateoffan = !!parseInt(state) ? true : false
        retrieve = true
        setState(stateoffan)
      })
      .catch(error => {
        console.error(error);
      });
  
  }
  
  useEffect(()=>{
    fetchData()
    const intervalTime = 5000;
    // Set the interval to fetch data
    setInterval(fetchData, intervalTime);
  },[])
  useEffect(() => {
    // Example usage
  
  publishToAdafruitIO(`${Number(btnState)}`); 
  console.log(`${Number(btnState)}`)
  }, [btnState]);
  if (btnState){
    return (
      <>
        <Space direction="vertical">
          <Space wrap>
            <Button
              onClick={Onclick}
              style={{ padding: "0px 20px" }}
              type="primary"
              size={size}
            >
              Active
            </Button>
            {/* <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} /> */}
          </Space>
        </Space>
      </>
    );
  }
  else{
    return(
        <>
        <Space direction="vertical">
          <Space wrap>
            <Button
              onClick={Onclick}
              style={{ padding: "0px 15px" }}
              danger
              type= "primary"
              size={size}
            >
              Inactive
            </Button>
            {/* <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} /> */}
          </Space>
        </Space>
      </>
    )
  }

};
export default ButtoninCard;


/* Can return state true of false mean on or off */