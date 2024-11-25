"use client";
import {
  DollarOutlined,
  DropboxOutlined,
  LinkOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { Button, Col, ConfigProvider, Drawer, Flex, Layout, Menu, Row } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWindowSize } from "./_utils";
import styles from "./styles.module.scss";
import HeaderAuth from "./_components/HeaderAuth";

const { Header, Content, Sider } = Layout;

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
  const pathname = usePathname();

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

  // Check if current route is login or register to conditionally render Sider and Header
  const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/admin";

  const renderMenu = () => {
    return (
      <Menu mode="inline" onClick={onClose}>
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

      {!isAuthRoute ? (
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
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <div>
            <div className={styles.logoFooter}>
              <img src="https://buyinggroup.com/static/media/BuyingGroup-Logo.f4da503f.svg" />
            </div>
          </div>
          {children}
          <Row align="middle">
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
          </Row>
          <Row>
            <Flex className={styles.footer}>
              <div className={styles.copyRight}>
                <span> 2024 The Point Saver. All rights reserved.</span>
              </div>
              <div className={styles.copyRight}>
                <span> Terms & Conditions</span>
              </div>
              <div className={styles.copyRight}>
                <span> Privacy Policy</span>
              </div>
            </Flex>
          </Row>
        </Layout>
      )}
    </ConfigProvider>
  );
};

export default LayoutWrapper;
