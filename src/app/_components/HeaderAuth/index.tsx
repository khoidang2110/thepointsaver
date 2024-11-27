"use client";

import { getInfoUser } from "@/app/_api/AuthService";
import { useWindowSize } from "@/app/_utils";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Modal } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function HeaderAuth({ showDrawer, collapsed, setCollapsed }: any) {
  const [data, setData] = useState<any>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getInfoUser();
      setData(res?.data?.data);
    })();
  }, []);

  const router = useRouter();
  const size = useWindowSize();
  const { Header } = Layout;

  const StyledModalCommit = styled(Modal)`
    .ant-modal-content {
      padding: 0px; /* Adjust the padding as needed */
      border-radius: 14px;
    }
  `;

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    router.push("/login");
  };
  return (
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
        onClick={() => setOpen(true)}
        className="flex"
        style={{ fontWeight: "600", fontSize: "12px", cursor: "pointer" }}
      >
        <p>{data?.user_name}</p>
      </span>
      <StyledModalCommit
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"min-content"}
        style={{ position: "absolute", right: 20, top: 40 }}
        title={
          <Flex className={styles.p10}>
            <span>ID:</span>
            <span>{data?.user_id}</span>
          </Flex>
        }
        footer={
          <Flex onClick={handleLogout} align="center" justify="center" className={styles.p10}>
            <img src="./logout.svg" />
            <span className={styles.red}>Sign Out</span>
          </Flex>
        }
      >
        <div className={`${styles.form} ${styles.p10}`}>
          <Flex>
            <span className={styles.subtext}>Name:</span>
            <span>{data?.user_name}</span>
          </Flex>
          <Flex>
            <span className={styles.subtext}>Phone:</span>
            <span>{data?.phone}</span>
          </Flex>
          <Flex>
            <span className={styles.subtext}>Email:</span>
            <span>{data?.email}</span>
          </Flex>
        </div>
      </StyledModalCommit>
    </Header>
  );
}
