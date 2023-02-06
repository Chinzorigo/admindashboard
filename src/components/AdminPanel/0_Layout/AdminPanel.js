import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
/*   UploadOutlined,
  UserOutlined,
  VideoCameraOutlined, */
} from '@ant-design/icons';
import { Layout, Switch, theme } from 'antd';
import './AdminPanel.css'
import AdminPanelMenu from './AdminPanelMenu';
import AdminDashBoard from '../1_DashBoard/adminDashBoard';
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

        <AdminDashBoard />


        
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