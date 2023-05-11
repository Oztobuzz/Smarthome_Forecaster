import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import React, { useState, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("User Information", "/userinfo", <UserOutlined />),
  getItem("Mail Notification", "/mailnotification", <MailOutlined />),
  getItem("Log Out", "/signin", <LogoutOutlined />),
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  return (
    <Fragment>
      {/* {" "} */}
      <div style={{ width: 200 }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={(item) => {
            navigate(item.key);
          }}
          style={{
            height: "80vh",
            borderRadius: "8px",
            boxShadow: "2px 8px 12px -2px rgba(0,0,0,0.70)",
          }}
        >
        </Menu>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
