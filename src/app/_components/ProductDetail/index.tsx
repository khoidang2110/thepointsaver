"use client";
import { Col, Flex, Modal, Row, Progress, InputNumber } from "antd";
import { ButtonCus } from "../ButtonCus";
import styles from "./styles.module.scss";
import { useState } from "react";

import type { ProgressProps } from "antd";
import ModalCommit from "./modalCommit";
import ModalView from "./modalView";

export default function ProductDetail({ data }: any) {
  const [openView, setOpenView] = useState<boolean>(false);
  const [openCommit, setOpenCommit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const showView = () => {
    setOpenView(true);
    // setLoading(true);

    // // Simple loading mock. You should add cleanup logic in real world.
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };
  const showCommit = () => {
    setOpenCommit(true);
  };
  const onClose = () => {
    setOpenCommit(false);
  };
  const onCloseView = () => {
    setOpenView(false);
  };

  return (
    <Col span={24}>
      {data?.tag && (
        <Flex align="center" className={styles.tagCost}>
          <div className={styles.boxImg}>
            <img src="/icon-below.svg" />
          </div>

          <span>Below cost</span>
        </Flex>
      )}
      <div
        className={styles.formProduct}
        style={{ borderTop: data?.tag ? `4px solid red` : "none" }}
      >
        <div onClick={showView} className={styles.boxImg}>
          <img src={"/nodata.svg" || data?.deal_image} />
          <div className={styles.tagProd}>
            <span className={styles.greentag}>▲ 12%</span>
            {/* <span className={styles.redtag}>▼ 12%</span> */}
          </div>
        </div>
        {/* <span className={styles.blackFri}>🔥 Black Friday</span> */}
        <span onClick={showView} className={styles.textProduct}>
          {data?.item_title}
        </span>
        <span className={styles.price}>${data?.price}</span>
        {data?.deal_store.length > 0 && (
          <div className={styles.moreInfo}>
            <Flex>
              {data?.deal_store?.map((item: any, i: any) => (
                <div key={i.toString()} className={styles.boxImg}>
                  <img
                    key={i.toString()}
                    src={item?.stores?.store_icon}
                    alt={item?.stores?.store_name}
                  />
                </div>
              ))}
            </Flex>
            <span className={styles.time}>{data?.time}</span>
          </div>
        )}

        <div className={styles.button}>
          <ButtonCus
            onClick={showCommit}
            style={{ width: "48%", borderRadius: 20, padding: 14 }}
            color="primary"
            variant="solid"
            text="Commit"
          />
          <ButtonCus
            onClick={showView}
            style={{ width: "48%", borderRadius: 20, padding: 14 }}
            color="primary"
            variant="outlined"
            text="View deal"
          />
        </div>
      </div>
      <ModalView onClose={onCloseView} openView={openView} />
      <ModalCommit onClose={onClose} openCommit={openCommit} />
    </Col>
  );
}
