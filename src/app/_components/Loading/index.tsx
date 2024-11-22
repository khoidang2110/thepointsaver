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
        height: "100vh",
        backgroundColor: "#f0f2f5", // Optional: a light background for better visibility
      }}
    >
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default Loading;
