'use client';

import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, ConfigProvider } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DollarOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter, usePathname } from 'next/navigation';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, onClick?: () => void): MenuItem {
  return { key, icon, label, onClick } as MenuItem;
}

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Set initial `selectedKey` based on `pathname`
  const [selectedKey, setSelectedKey] = useState(() => {
    switch (pathname) {
      case '/deals':
        return '2';
      default:
        return '1';
    }
  });

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelectedKey('1');
        break;
      case '/deals':
        setSelectedKey('2');
        break;
      default:
        setSelectedKey('1');
        break;
    }
  }, [pathname]);

  const items: MenuItem[] = [
    getItem('Dashboard', '1', <PieChartOutlined />, () => {
      router.push('/');
    }),
    getItem('Deals', '2', <DollarOutlined />, () => {
      router.push('/deals');
    }),
    getItem('My Commitments', '3', <LinkOutlined />),
  ];

  // Check if current route is login or register to conditionally render Sider and Header
  const isAuthRoute = pathname === '/login' || pathname === '/register';

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: '#fff',
          },
        },
        token: {
          colorPrimary: '#8CB369',
          colorBgContainer: '#fff',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        {!isAuthRoute && (
          <Header style={{
            position: 'fixed',
            zIndex: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '45px',
            padding: '0 25px',
            background: '#fff',
          }}>
            <span className='flex items-center'>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: '16px', width: 42, height: 42 }}
              />
              <p>The Point Saver</p>
            </span>
            <span className="flex" style={{ fontWeight: "600", fontSize: "12px" }}>
              <p>hello</p>
            </span>
          </Header>
        )}
        <Layout style={{ marginTop: isAuthRoute ? 0 : 64 }}>
          {!isAuthRoute && (
            <Sider trigger={null} collapsible collapsed={collapsed} style={{
              overflow: 'auto',
              height: '90vh',
              position: 'fixed',
              left: 0,
              top: 54,
              bottom: 0,
              zIndex: 10,
              margin: 10,
              borderRadius: 12,
            }}>
              <Menu theme="light" selectedKeys={[selectedKey]} mode="inline" items={items} />
            </Sider>
          )}
          <Layout style={{
            marginLeft: isAuthRoute ? 0 : collapsed ? 80 : 200,
            padding: '0 24px 24px',
            transition: 'margin-left 0.3s ease',
          }}>
            <Content style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#f5f5f5',
              borderRadius: 12,
              overflowY: 'auto',
              maxHeight: 'calc(100vh - 112px)',
            }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutWrapper;
