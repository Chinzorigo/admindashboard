import React, { useState} from "react";
import { Link, Route } from "react-router-dom";
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
import AdminDashBoard from "../1_DashBoard/adminDashBoard";
import AdminProducts from "../2_Products/AdminProducts";
import AdminServices from "../3_Services/AdminServices"; 
import AdminOrders from "../4_Orders/AdminOrders";
import AdminUsers from "../5_Users/AdminUsers";
import AdminProductSuppliers from "../6_ProductSuppliers/AdminProductSuppliers";
import AdminServiceSuppliers from "../7_ServiceSuppliers/AdminServiceSuppliers.js";
import AdminFeedback from "../8_Feedback/AdminFeedback";
import AdminReports from "../9_Reports/AdminReports"

const SubMenu = Menu.SubMenu;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const items = [
  getItem("Хянах самбар", "1", <DashboardOutlined />, <Route path="/admin/1" component={AdminDashBoard}  />),
  getItem("Бүтээгдэхүүн", "2", <CarOutlined />, <Route path="/adminpanel/admin/2" component={AdminProducts}  />),
  getItem("Үйлчилгээ", "3", <DesktopOutlined />, <Route path="/admin/3" component={AdminServices}  />),
  getItem("Захиалга", "4", <DollarOutlined />, <Route path="/admin/4" component={AdminOrders}  />),
  getItem("Хэрэглэгч", "5", <UserOutlined />, <Route path="/admin/5" component={AdminUsers}  />),
  getItem("Нийлүүлэгч", "sub1", <TeamOutlined />, [
    getItem("Бүтээгдэхүүн нийлүүлэгч", "6",<Route path="/admin/6" component={AdminProductSuppliers}  />),
    getItem("Үйлчилгээ үзүүлэгч", "7", <Route path="/admin/7" component={AdminServiceSuppliers}  />),
  ]),
  getItem("Лавлагаа", "8", <PaperClipOutlined />, <Route path="/admin/8" component={AdminFeedback}  />),
  getItem("Тайлан", "9", <PieChartOutlined />,<Route path="/admin/9" component={AdminReports}  />),
];

const AdminPanelMenu = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  
  const handleClick = (e) => {
    setSelectedKey(e.key);
  };


  const AdminPanelMenu = () => {
    const [selectedKey, setSelectedKey] = useState("1");
  
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
      >
        {items.map(item => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
          >
            <Link to={`/${item.key}`}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>


  );
};

export default AdminPanelMenu;
