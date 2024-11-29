"use client";
import { CloseOutlined } from "@ant-design/icons";

import { Button, Col, ConfigProvider, Drawer, Flex, Layout, Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWindowSize } from "./_utils";
import styles from "./styles.module.scss";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize();
  const [openHeader, setOpenHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Check if current route is login or register to conditionally render Sider and Header

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        // Adjust the scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    if (collapsed) {
      setOpenHeader(false);
    } else {
      setOpenHeader(true);
    }
  };

  const onCloseHeader = () => {
    setOpenHeader(false);
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
        <Flex align="center" className={isScrolled ? styles.header : styles.default}>
          <div className={styles.logoHeader}>
            <img src="https://buyinggroup.com/static/media/BuyingGroup-Logo.f4da503f.svg" />
          </div>
          {size.width > 1024 ? (
            <>
              <div>
                <Flex justify="space-around" align="center">
                  <div>
                    <span className={styles.textHeader}>Home</span>
                  </div>
                  <div>
                    <span className={styles.textHeader}>About</span>
                  </div>
                  <div>
                    <span className={styles.textHeader}>FAQs</span>
                  </div>
                  <div>
                    <span className={styles.textHeader}>Contact Us</span>
                  </div>
                </Flex>
              </div>
              <div>
                <Button className={styles.btnHeader} variant="outlined">
                  <Link href="/login">Login</Link>
                </Button>
                <Button type="primary" className={styles.btnHeader}>
                  <Link href="/register">Join Now</Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <div onClick={handleMenu}>
                <img src="./menu.svg" />
              </div>
              <Drawer
                placement="right"
                size="default"
                closable={true}
                onClose={onCloseHeader}
                open={openHeader}
                key="right"
                width={"250px"}
                style={{ padding: 0! }}
                closeIcon={
                  <CloseOutlined
                    style={{
                      position: "absolute",
                      top: "20px", // Adjust the top position
                      right: "20px", // Adjust the left position
                      fontSize: "16px",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  />
                }
              >
                <div className={styles.drawerHeader}>
                  <span className={styles.textHeader}>Home</span>
                  <span className={styles.textHeader}>About</span>
                  <span className={styles.textHeader}>FAQs</span>
                  <span className={styles.textHeader}>Contact Us</span>
                  <div className={styles.drawerFooter}>
                    <Button onClick={onCloseHeader} className={styles.btnHeader} variant="outlined">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button onClick={onCloseHeader} type="primary" className={styles.btnHeader}>
                      <Link href="/register">Join Now</Link>
                    </Button>
                  </div>
                </div>
              </Drawer>
            </>
          )}
        </Flex>
        {children}
        <Row align="middle" className={styles.subMenu}>
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
    </ConfigProvider>
  );
};

export default LayoutAuth;
