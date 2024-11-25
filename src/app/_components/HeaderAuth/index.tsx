import { getInfoUser } from "@/app/_api/AuthService";
import { useWindowSize } from "@/app/_utils";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useEffect } from "react";

export default function HeaderAuth({ showDrawer, collapsed, setCollapsed }: any) {
  useEffect(() => {
    (async () => {
      const res = await getInfoUser();
      console.log("res", res);
    })();
  }, []);
  const size = useWindowSize();
  const { Header } = Layout;
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
      <span className="flex" style={{ fontWeight: "600", fontSize: "12px" }}>
        <p>hello</p>
      </span>
    </Header>
  );
}
