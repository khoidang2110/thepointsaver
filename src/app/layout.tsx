"use client";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutWrapper from "./layoutAuth";
import { Provider } from "react-redux";
import store from "./store/store";
import { usePathname } from "next/navigation";
import LayoutAuth from "./layoutUnAuth";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/admin";
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AntdRegistry>
          <Provider store={store}>
            {isAuthRoute ? (
              <LayoutAuth>{children}</LayoutAuth>
            ) : (
              <LayoutWrapper>{children}</LayoutWrapper>
            )}
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
