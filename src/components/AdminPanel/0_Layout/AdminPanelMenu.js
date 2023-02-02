import React from "react";
import {
  PieChartOutlined,
  CarOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  DashboardOutlined,
  PaperClipOutlined,
  DollarOutlined
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Хянах самбар", "1", <DashboardOutlined />),
  getItem("Бүтээгдэхүүн", "2", <CarOutlined />),
  getItem("Үйлчилгээ", "3", <DesktopOutlined />),
  getItem("Захиалга", "4", <DollarOutlined />),
  getItem("Хэрэглэгч", "5", <UserOutlined />),
  getItem("Нийлүүлэгч", "sub1", <TeamOutlined />, [
    getItem("Бүтээгдэхүүн нийлүүлэгч", "6"),
    getItem("Үйлчилгээ үзүүлэгч", "7"),
  ]),
  getItem("Лавлагаа", "10", <PaperClipOutlined />),
  getItem("Тайлан", "11", <PieChartOutlined />),
];

const AdminPanelMenu = () => {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  );
};

export default AdminPanelMenu;
