import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
/*   UploadOutlined,
  UserOutlined,
  VideoCameraOutlined, */
} from '@ant-design/icons';
import { Layout, theme } from 'antd';
import './AdminPanel.css'
import AdminPanelMenu from './AdminPanelMenu';
import AdminDashBoard from '../1_DashBoard/AdminDashBoard';
import AdminProducts from '../2_Products/AdminProducts';
import AdminServices from '../3_Services/AdminServices';
import AdminOrders from '../4_Orders/AdminOrders';
import AdminUsers from '../5_Users/AdminUsers';
import AdminProductSuppliers from '../6_ProductSuppliers/AdminProductSuppliers';
import AdminServiceSuppliers from '../7_ServiceSuppliers/AdminServiceSuppliers';
import AdminFeedback from '../8_Feedback/AdminFeedback';
import AdminReports from '../9_Reports/AdminReports';



const { Header, Sider, Content, Footer } = Layout;

const AdminPanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100%", width: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <AdminPanelMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content className='adminContentStyle'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <Routes>
          <Route path="/adminpanel/1" component={AdminDashBoard} />
          <Route path="/adminpanel" component={AdminProducts} />
          <Route path="/adminpanel" component={AdminServices} />
          <Route path="/adminpanel" component={AdminOrders} />
          <Route path="/adminpanel" component={AdminUsers} />
          <Route path="/adminpanel" component={AdminServiceSuppliers} />
          <Route path="/adminpanel" component={AdminProductSuppliers} />
          <Route path="/adminpanel" component={AdminFeedback} />
          <Route path="/adminpanel" component={AdminReports} />

          </Routes>
        
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Chinzorig Systems LLC ©2023 Created by Chinzo
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminPanel;