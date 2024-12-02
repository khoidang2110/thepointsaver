"use client";
import { Col, Flex, Modal, Row, Progress, InputNumber } from "antd";
import { ButtonCus } from "../../ButtonCus";
import styles from "../styles.module.scss";
import styled from "styled-components";
import type { ProgressProps } from "antd";
import { useEffect } from "react";
import { getDetailDeal } from "@/app/_api/AuthService";

export default function ModalView({ onClose, onClick, openView, dealId }: any) {
  const StyledModal = styled(Modal)`
    .ant-modal-content {
      padding: 20px 12px; /* Adjust the padding as needed */
    }
  `;

  useEffect(() => {
    if (openView) {
      (async () => {
        const res = getDetailDeal(dealId);
        console.log("res", res);
      })();
    }
  }, [openView]);

  return (
    <StyledModal
      footer={
        <ButtonCus
          onClick={onClick}
          style={{ borderRadius: 20, padding: 14 }}
          color="primary"
          variant="solid"
          text="Commit"
        />
      }
      // loading={loading}
      open={openView}
      onClose={onClose}
      onCancel={onClose}
      width={"95%"}
      style={{ maxWidth: "1250px" }}
    >
      <div className={styles.detailProd}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={9}>
            <div className={styles.boxImg}>
              <img src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4900/4900944_sd.jpg" />
            </div>
          </Col>
          <Col xs={24} lg={15}>
            <span className={styles.nameProd}>
              Apple - Airpods (3Rd Generation) - White Magsafe
            </span>
            <Flex className={styles.info}>
              <span className={`${styles.price} ${styles.mr5}`}>$103</span>
              <span className={`${styles.blackFri} ${styles.mr5}`}>🔥 Black Friday</span>

              <span className={`${styles.greentag} ${styles.mr5}`}>▲ 12%</span>
              {/* <span className={styles.redtag}>▼ 12%</span> */}
            </Flex>
            <Row gutter={[8, 8]}>
              <Col xs={14} lg={12}>
                <Row>
                  <Col xs={10} lg={10}>
                    <span className={`${styles.subText} ${styles.regular16}`}>UPC</span>
                  </Col>
                  <Col xs={14} lg={14}>
                    <span className={styles.regular16}>194252818381</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={10} lg={12}>
                <Row>
                  <Col xs={10} lg={10}>
                    <span className={`${styles.subText} ${styles.regular16}`}>Price</span>
                  </Col>
                  <Col xs={14} lg={14}>
                    <span className={styles.regular16}>$99</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={14} lg={12}>
                <Row>
                  <Col xs={10} lg={10}>
                    <span className={`${styles.subText} ${styles.regular16}`}>Model</span>
                  </Col>
                  <Col xs={14} lg={14}>
                    <span className={styles.regular16}>MME73AM/A</span>
                  </Col>
                </Row>
              </Col>

              <Col xs={10} lg={12}>
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

            {/* <div className={styles.label}>
                <span>20+ Free Bg Shipping Label</span>
              </div> */}
          </Col>
          <Col xs={24} lg={9}>
            <div className={styles.delivery}>
              <span className={styles.title}>Delivery & Shipping locations</span>
              <div>
                <div className={styles.options}>
                  <span className={styles.maintext}>Delivery Options:</span>
                  <span className={styles.regular16}>Ship Direct</span>
                </div>

                <div className={styles.options}>
                  <span className={styles.maintext}>Shipping Locations:</span>
                  <span className={styles.regular16}>
                    13130 NE Airport Way, portland, oregon, 97230-1060
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={15}>
            <div className={styles.delivery}>
              <span className={styles.title}>Items</span>
              <Row className={styles.options}>
                <Col xs={24} lg={5}>
                  <div className={styles.boxImg}>
                    <img src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4900/4900944_sd.jpg" />
                  </div>
                </Col>
                <Col xs={24} sm={24} lg={19}>
                  <Row align={"middle"} gutter={[8, 8]}>
                    <Col xs={24} lg={19}>
                      <span className={styles.nameItem}>
                        Apple - Airpods (3Rd Generation) - White Magsafe
                      </span>
                      <Row gutter={[8, 8]}>
                        <Col xs={14} lg={12}>
                          <Row>
                            <Col xs={7} lg={7}>
                              <span className={`${styles.subText} ${styles.regular16}`}>UPC</span>
                            </Col>
                            <Col xs={17} lg={17}>
                              <span className={styles.regular16}>194252818381</span>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={10} lg={12}>
                          <Row>
                            <Col xs={12} lg={8}>
                              <span className={`${styles.subText} ${styles.regular16}`}>Price</span>
                            </Col>
                            <Col xs={12} lg={16}>
                              <span className={styles.regular16}>$99</span>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={14} lg={12}>
                          <Row>
                            <Col xs={7} lg={7}>
                              <span className={`${styles.subText} ${styles.regular16}`}>Model</span>
                            </Col>
                            <Col xs={17} lg={17}>
                              <span className={styles.regular16}>MME73AM/A</span>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={10} lg={12}>
                          <Row>
                            <Col xs={12} lg={8}>
                              <span className={`${styles.subText} ${styles.regular16}`}>Comm.</span>
                            </Col>
                            <Col xs={12} lg={16}>
                              <span className={styles.regular16}>$3.01</span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Flex align="center">
                        <div className={styles.smallLogo}>
                          <img src="https://logo.clearbit.com/homedepot.com" />
                        </div>
                        <a>The home depot</a>
                      </Flex>
                    </Col>

                    <Col xs={24} lg={5}>
                      <div className={styles.textCenter}>
                        <Progress type="dashboard" percent={75} size="small" />
                        <div>
                          <span className={styles.regular12}>Unlimited</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </StyledModal>
  );
}
