"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export const Tools = ({ data, setDataTools }: any) => {
  const handleClick = (itemName: any) => {
    setDataTools((prevData: any) =>
      prevData.map((item: any) =>
        item.name === itemName ? { ...item, active: true } : { ...item, active: false },
      ),
    );
  };

  return (
    <div className={styles.tools}>
      {data?.map((e: any, i: any) => (
        <div
          style={{ background: e.active ? "#8cb369" : "rgb(175, 175, 175)" }}
          key={i.toString()}
          onClick={() => handleClick(e.name)}
          className={styles.toolsItem}
        >
          <div className={styles.boxImg}>
            <img src={e.img} />
          </div>
        </div>
      ))}
    </div>
  );
};
