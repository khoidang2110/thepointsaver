"use client";
import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, ConfigProvider, Drawer, Row, Col, Flex } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DollarOutlined,
  LinkOutlined,
  DropboxOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { useWindowSize } from "./_utils";
import styles from "./styles.module.scss";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  onClick?: () => void,
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
      case "/orders":
        return "4";
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
      case "/orders":
        setSelectedKey("4");
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
    getItem("Orders", "4", <DropboxOutlined />, () => {
      router.push("/orders");
    }),
  ];

  // Check if current route is login or register to conditionally render Sider and Header
  const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/admin";

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
      {!isAuthRoute ? (
        <Layout style={{ minHeight: "100vh" }}>
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
            <span className="flex" style={{ fontWeight: "600", fontSize: "12px" }}>
              <p>hello</p>
            </span>
          </Header>

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
                <Menu theme="light" selectedKeys={[selectedKey]} mode="inline" items={items} />
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
      ) : (
        <>
          {children}
          {/* <Row align="middle">
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className={styles.logoFooter}>
                <img src="https://buyinggroup.com/static/media/BuyingGroup-Logo.f4da503f.svg" />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <Flex justify="space-around" align="center">
                <div>
                  <span className={styles.textFooter}>Home</span>
                  <span className={styles.textFooter}>About</span>
                </div>
                <div>
                  <span className={styles.textFooter}>FAQs</span>
                  <span className={styles.textFooter}>Contact Us</span>
                </div>
              </Flex>
            </Col>
            <Col xs={24} sm={24} md={24} lg={9} xl={9}>
              <Flex justify="space-around" align="center" className={styles.itemFooter}>
                <Flex>
                  <img src="https://buyinggroup.com/static/media/whatsapp-icon.b8d85d1d.svg" />
                  <span className={styles.infoFooter}>+1 747-296-4177</span>
                </Flex>
                <div>
                  <Flex>
                    <img src="https://buyinggroup.com/static/media/whatsapp-icon.b8d85d1d.svg" />
                    <span className={styles.infoFooter}>+1 747-296-4177</span>
                  </Flex>
                  <Flex>
                    <img src="https://buyinggroup.com/static/media/whatsapp-icon.b8d85d1d.svg" />
                    <span className={styles.infoFooter}>+1 747-296-4177</span>
                  </Flex>
                </div>
              </Flex>
            </Col>
          </Row> */}
        </>
      )}
    </ConfigProvider>
  );
};

export default LayoutWrapper;
