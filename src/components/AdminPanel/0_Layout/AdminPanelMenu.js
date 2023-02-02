import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";



const AdminPanelMenu = () => {


  return (
    <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={['1']}
    items={[
      {
        key: '1',
        icon: <UserOutlined />,
        label: 'Dashboard',
      },
      {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'Products',
      },
      {
        key: '3',
        icon: <UploadOutlined />,
        label: 'Service',
      },
    ]}
  />
  );
};

export default AdminPanelMenu;
