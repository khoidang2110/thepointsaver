"use client";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutWrapper from "./layoutWrapper";
import { Provider } from "react-redux";
import store from "./store/store";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AntdRegistry>
          <Provider store={store}>
            <LayoutWrapper>{children}</LayoutWrapper>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
