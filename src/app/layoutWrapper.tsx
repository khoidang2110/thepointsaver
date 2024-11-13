"use client";

import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, ConfigProvider, Drawer } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DollarOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { useWindowSize } from "./_utils";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  onClick?: () => void
): MenuItem {
  return { key, icon, label, onClick } as MenuItem;
}

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Set initial `selectedKey` based on `pathname`
  const [selectedKey, setSelectedKey] = useState(() => {
    switch (pathname) {
      case "/deals":
        return "2";
      case "/commitments":
        return "3";
      default:
        return "1";
    }
  });

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelectedKey("1");
        break;
      case "/deals":
        setSelectedKey("2");
        break;
      case "/commitments":
        setSelectedKey("3");
        break;
      default:
        setSelectedKey("1");
        break;
    }
  }, [pathname]);

  const items: MenuItem[] = [
    getItem("Dashboard", "1", <PieChartOutlined />, () => {
      router.push("/");
    }),
    getItem("Deals", "2", <DollarOutlined />, () => {
      router.push("/deals");
    }),
    getItem("My Commitments", "3", <LinkOutlined />, () => {
      router.push("/commitments");
    }),
  ];

  // Check if current route is login or register to conditionally render Sider and Header
  const isAuthRoute =
    pathname === "/login" || pathname === "/register" || pathname === "/admin";

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
      <Layout style={{ minHeight: "100vh" }}>
        {!isAuthRoute && (
          <Header
            style={{
              position: "fixed",
              zIndex: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "45px",
              padding: "0 25px",
              background: "#fff",
            }}
          >
            <span className="flex items-center">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  size.width > 768 ? setCollapsed(!collapsed) : showDrawer();
                }}
                style={{ fontSize: "16px", width: 42, height: 42 }}
              />
              <p>The Point Saver</p>
            </span>
            <span
              className="flex"
              style={{ fontWeight: "600", fontSize: "12px" }}
            >
              <p>hello</p>
            </span>
          </Header>
        )}
        <Layout style={{ marginTop: isAuthRoute ? 0 : 64 }}>
          {!isAuthRoute &&
            (size.width > 900 ? (
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
                <Menu
                  theme="light"
                  selectedKeys={[selectedKey]}
                  mode="inline"
                  items={items}
                />
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
                <Menu
                  onClick={() => {
                    onClose();
                  }}
                  theme="light"
                  selectedKeys={[selectedKey]}
                  mode="inline"
                  items={items}
                />
              </Drawer>
            ))}

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

export default LayoutWrapper;
