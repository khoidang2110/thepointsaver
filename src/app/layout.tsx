import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutWrapper from "./layoutWrapper";
import { useEffect } from "react";
import { getInfoUser } from "./_api/AuthService";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AntdRegistry>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
