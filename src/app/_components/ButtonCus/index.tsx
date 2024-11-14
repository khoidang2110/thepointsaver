import { Button } from "antd";
import React from "react";

export const ButtonCus = ({ color, variant, text, style, onClick }: any) => {
  return (
    <Button onClick={onClick} style={style} color={color} variant={variant}>
      {text}
    </Button>
  );
};
