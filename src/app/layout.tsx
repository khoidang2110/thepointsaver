"use client";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutUnAuth from "./layoutUnAuth";
import { Provider } from "react-redux";
import store from "./store/store";
import { usePathname } from "next/navigation";
import LayoutAuth from "./layoutAuth";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/admin";
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AntdRegistry>
          <Provider store={store}>
            {isAuthRoute ? (
              <LayoutUnAuth>{children}</LayoutUnAuth>
            ) : (
              <LayoutAuth>{children}</LayoutAuth>
            )}
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
};
// K - reup github 04-12
export default RootLayout;
