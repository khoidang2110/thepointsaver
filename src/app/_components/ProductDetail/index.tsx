"use client";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import { Col, Row, Flex } from "antd";
import { ButtonCus } from "../ButtonCus";

export default function ProductDetail({ data }: any) {
  return (
    <Col span={24}>
      {data?.tag && (
        <div className={styles.tagCost}>
          <span>Below cost</span>
        </div>
      )}
      <div
        className={styles.formProduct}
        style={{ borderTop: data?.tag ? `4px solid red` : "none" }}
      >
        <div className={styles.boxImg}>
          <img src={data?.img}></img>
          <div className={styles.tagProd}>
            <span className={styles.greentag}>▲ 12%</span>
            {/* <span className={styles.redtag}>▼ 12%</span> */}
          </div>
        </div>
        <span className={styles.textProduct}>{data?.name}</span>
        <span className={styles.price}>{data?.price}</span>
        <div className={styles.moreInfo}>
          <Flex>
            {data?.brand.map((item: any, i: any) => (
              <div key={i.toString()} className={styles.boxImg}>
                <img key={i.toString()} src={item?.img} alt={item?.name} />
              </div>
            ))}
          </Flex>
          <span className={styles.time}>{data?.time}</span>
        </div>
        <div className={styles.button}>
          <ButtonCus color="primary" variant="solid" text="Commit" />
          <ButtonCus color="primary" variant="outlined" text="View deal" />
        </div>
      </div>
    </Col>
  );
}
