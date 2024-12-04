import { Button } from "antd";
import React from "react";

export const ButtonCus = ({ color, variant, text, style, onClick, disabled }: any) => {
  return (
    <Button
      disabled={disabled ? true : false}
      onClick={onClick}
      style={style}
      color={color}
      variant={variant}
    >
      {text}
    </Button>
  );
};
