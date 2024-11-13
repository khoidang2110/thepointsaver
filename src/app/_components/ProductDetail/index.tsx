"use client";
import { Col, Flex, Modal, Row } from "antd";
import { ButtonCus } from "../ButtonCus";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function ProductDetail({ data }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    // setLoading(true);

    // // Simple loading mock. You should add cleanup logic in real world.
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };

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
        <div onClick={showLoading} className={styles.boxImg}>
          <img src={data?.img}></img>
          <div className={styles.tagProd}>
            <span className={styles.greentag}>▲ 12%</span>
            {/* <span className={styles.redtag}>▼ 12%</span> */}
          </div>
        </div>
        <span onClick={showLoading} className={styles.textProduct}>
          {data?.name}
        </span>
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

      <Modal
        title={<p>Loading Modal</p>}
        footer={
          <ButtonCus type="primary" onClick={showLoading}>
            Reload
          </ButtonCus>
        }
        // loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Row>
          <Col xs={24} lg={9}>
            <div className={styles.boxImg}>
              <img src="https://buyinggroup.com/static/media/dashboard_container_filled.1a79ce62.svg" />
            </div>
          </Col>
          <Col xs={24} lg={15}>
            <span>This is a loading modal.</span>
            <Flex>
              <span></span>
              <span></span>
              <span></span>
            </Flex>
          </Col>
        </Row>
      </Modal>
    </Col>
  );
}
