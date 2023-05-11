import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/home.component";
import Navbar from "./routes/Navigation/navigation.component";
import MailNoti from "./routes/Mail/mailnoti.component";
import UserInfo from "./routes/Userinfo/userinfo.component";
import SignIn from "./routes/Signin/signin.component";
import SignUp from "./routes/Signup/signup.component";
import { useState, useEffect } from "react";


function App() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((users) => setDevices(users));
  }, []);
  // const {products} = devices
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home devices = {devices} />}></Route>
        <Route path="/mailnotification" element={<MailNoti />}></Route>
        <Route path="/userinfo" element={<UserInfo />}></Route>
      </Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
