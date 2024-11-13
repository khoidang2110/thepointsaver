import { Button } from "antd";
import React from "react";

export const ButtonCus = ({ color, variant, text }: any) => {
  return (
    <Button
      color={color}
      variant={variant}
      style={{ borderRadius: 20, width: "48%", padding: 14 }}
    >
      {text}
    </Button>
  );
};
