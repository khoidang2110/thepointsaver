'use client';
import './globals.css';
import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DollarOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Breadcrumb, Button, Layout, Menu, theme, ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Link from 'next/link';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(<Link href="/">Dashboard</Link>, '1', <PieChartOutlined />),
  getItem(<Link href="/deals">Deals</Link>, '2', <DollarOutlined />),
  getItem('My Commitments', '6', <LinkOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '90vh',
  position: 'fixed',
  left: 0,
  top: 54, // Offset to account for fixed Header height
  bottom: 0,
  zIndex: 10,
  margin: 10,
  borderRadius: 12
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                /* here is your component tokens */
                siderBg:'#fff'
              },
            },
          
            token: {
              colorPrimary: '#8CB369',
              colorBgContainer: '#fff'
            },
          }}
        >
          <Layout style={{ minHeight: '100vh' }}>
            <Header style={{
              position: 'fixed',
              zIndex: 10,
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '45px',
              padding: '0 25px',
              background: '#fff'
            }}>
              <span className='flex items-center'>
              <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 42,
              height: 42,
            }}
          />
          <p>The Point Saver</p>

              </span>
         
              <span className="flex" style={{ fontWeight: "600", fontSize: "12px" }}>
                <p>hello</p>
              </span>
            </Header>
            <Layout style={{ marginTop: 64 }}>
              <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
                <div className="demo-logo-vertical" />
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
              </Sider>
              <Layout style={{
                marginLeft: collapsed ? 80 : 200, // Adjust width based on collapse state
                padding: '0 24px 24px',
                overflow: 'hidden',
                transition: 'margin-left 0.3s ease',
              }}>
           
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: '#f5f5f5',
                    borderRadius: 12,
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 112px)',
                    
                  }}
                >
                  
                  <AntdRegistry>{children}</AntdRegistry>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
};

export default RootLayout;
