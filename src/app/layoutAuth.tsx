"use client";
import { DollarOutlined, DropboxOutlined, LinkOutlined, PieChartOutlined } from "@ant-design/icons";

import { ConfigProvider, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderAuth from "./_components/HeaderAuth";
import { useWindowSize } from "./_utils";

const { Header, Content, Sider } = Layout;

const layoutUnAuth = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");

  const items = [
    { key: "1", icon: <PieChartOutlined />, label: "Dashboard", name: "/" },
    { key: "2", icon: <DollarOutlined />, label: "Deals", name: "deals" },
    { key: "3", icon: <LinkOutlined />, label: "My Commitments", name: "commitments" },
    {
      key: "sub1",
      label: "Orders",
      icon: <DropboxOutlined />,
      name: "orders",
      children: [
        { key: "5", label: "My Orders", name: "myorders" },
        { key: "6", label: "Orders Details", name: "detail" },
        { key: "7", label: "Orders Analytics", name: "analytics" },
        { key: "8", label: "Order Price Dispute", name: "disputes" },
      ],
    },
  ];

  const findItemByName: any = (items: any, name: any) => {
    for (const item of items) {
      if (item.name === name) return item;
      if (item.children) {
        const [parentName, ...rest] = name.split("/");
        if (item.name === parentName) {
          return findItemByName(item.children, rest.join("/")); // Recurse with the remaining path
        }
      }
    }
    return null;
  };
  useEffect(() => {
    const matchedItem = findItemByName(items, pathname.slice(1)); // Remove leading "/" for matching
    if (matchedItem) {
      setSelectedKey(matchedItem?.key);
    }
  }, [pathname]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMenuClick = ({ key }: any) => {
    setSelectedKey(key);
  };

  const renderMenu = () => {
    return (
      <Menu selectedKeys={[selectedKey]} mode="inline" onClick={handleMenuClick}>
        {items.map((item: any) =>
          item?.children ? (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((child: any) => (
                <Menu.Item key={child.key}>
                  <Link href={`/orders/${child.name}`}>{child.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={`/${item.name}`}>{item.label}</Link>
            </Menu.Item>
          ),
        )}
      </Menu>
    );
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "#fff",
          },
        },
        token: {
          colorPrimary: "#8CB369",
          colorBgContainer: "#fff",
        },
      }}
    >
      <ToastContainer />
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderAuth showDrawer={showDrawer} collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout style={{ marginTop: 64 }}>
          {size.width > 900 ? (
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              style={{
                overflow: "auto",
                height: "90vh",
                position: "fixed",
                left: 0,
                top: 54,
                bottom: 0,
                zIndex: 10,
                margin: 10,
                borderRadius: 12,
              }}
            >
              {renderMenu()}
            </Sider>
          ) : (
            <Drawer
              placement="left"
              size="default"
              closable={true}
              onClose={onClose}
              open={open}
              key="left"
              style={{ padding: 0! }}
            >
              {renderMenu()}
            </Drawer>
          )}

          <Layout
            style={{
              marginLeft: size.width < 900 ? 0 : collapsed ? 80 : 200,
              padding: "0 24px 24px",
              transition: "margin-left 0.3s ease",
            }}
          >
            <Content
              style={{
                margin: 0,
                minHeight: 280,
                background: "#f5f5f5",
                borderRadius: 12,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default layoutUnAuth;
