import React, { useState } from 'react';
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
const { Header, Sider, Content } = Layout;
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
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminPanel;