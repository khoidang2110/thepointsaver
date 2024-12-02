"use client";
import { Col, Flex, Modal, Row, Progress, InputNumber } from "antd";
import { ButtonCus } from "../../ButtonCus";
import styles from "../styles.module.scss";
import styled from "styled-components";
import type { ProgressProps } from "antd";
import { useEffect } from "react";
import { getDetailDeal } from "@/app/_api/AuthService";

export default function ModalCommit({ onClose, openCommit }: any) {
  const StyledModalCommit = styled(Modal)`
    .ant-modal-content {
      padding: 0px; /* Adjust the padding as needed */
    }
    .ant-modal-header {
      padding: 20px;
      margin-bottom: 0px;
    }
    .ant-modal-title {
      font-weight: 400;
      font-size: 18px !important;
      line-height: 22px !important;
    }
  `;
  const twoColors: ProgressProps["strokeColor"] = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };

  return (
    <StyledModalCommit
      title={"Add Commitment"}
      footer={
        <ButtonCus
          style={{
            borderRadius: 20,
            padding: 14,
            marginRight: 20,
            marginBottom: 10,
          }}
          color="primary"
          variant="solid"
          text="Commit"
        />
      }
      // loading={loading}
      open={openCommit}
      onClose={onClose}
      onCancel={onClose}
      width={"95%"}
      style={{ maxWidth: "760px" }}
    >
      <div className={styles.commitProd}>
        <Row align={"middle"} gutter={[8, 8]}>
          <Col xs={4} md={4} lg={3} xl={3}>
            <div className={styles.boxImgCommit}>
              <img src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4900/4900944_sd.jpg" />
            </div>
          </Col>
          <Col xs={20} md={20} lg={13} xl={13}>
            <Row className="mb-1">
              <span>Apple - Airpods (3Rd Generation) - White Magsafe</span>
            </Row>
            <Row className="mb-1">
              <Col xs={5} lg={4}>
                <span className={`${styles.subText} ${styles.regular16}`}>UPC</span>
              </Col>
              <Col xs={19} lg={20}>
                <span className={styles.regular16}>194252818381</span>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={12}>
                <Row>
                  <Col xs={10} lg={8}>
                    <span className={`${styles.subText} ${styles.regular16}`}>Price</span>
                  </Col>
                  <Col xs={14} lg={16}>
                    <span className={styles.regular16}>$99</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={12}>
                <Row>
                  <Col xs={10} lg={10}>
                    <span className={`${styles.subText} ${styles.regular16}`}>Comm.</span>
                  </Col>
                  <Col xs={14} lg={14}>
                    <span className={styles.regular16}>$3.01</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} lg={8} xl={8}>
            <InputNumber placeholder="Enter amount" style={{ width: "100%" }} />
            <span className={styles.allowText}>Max Allowed Limit: Unlimited</span>
            <Progress percent={50} strokeColor={twoColors} />
          </Col>
        </Row>
      </div>
    </StyledModalCommit>
  );
}
