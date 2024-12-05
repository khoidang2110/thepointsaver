"use client";

import React from "react";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        zIndex: 10,
        minHeight: 150,
      }}
    >
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default Loading;
