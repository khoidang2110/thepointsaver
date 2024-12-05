"use client";
import { Col, Flex, Modal, Row, Progress, InputNumber } from "antd";
import { ButtonCus } from "../../ButtonCus";
import styles from "../styles.module.scss";
import styled from "styled-components";
import type { ProgressProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { getDetailDeal, postSaveCommitments } from "@/app/_api/AuthService";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../Loading";
import { getDataDealRequest } from "@/app/store/user/actions";
import { useDispatch, useSelector } from "react-redux";

export default function ModalCommit({ onClose, openCommit, dataDetail }: any) {
  const dataDeals = useSelector((state: any) => state.user.payloadDeal);
  const [loading, setLoading] = useState<boolean>();
  const amountRef = useRef<any>(null); // Use ref for amount
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
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (amountRef.current > dataDetail?.commit_limit) {
      toast.error("Amount too limited");
      return;
    }
    const payload = {
      deal_id: dataDetail?.deal_id,
      count: amountRef.current || 1,
    };
    (async () => {
      setLoading(true);
      const res = await postSaveCommitments(payload);
      if (res) {
        await dispatch(getDataDealRequest(payload));
        setLoading(false);
        onClose();
      }
    })();
  };

  return (
    <>
      <StyledModalCommit
        title={"Add Commitment"}
        footer={
          <ButtonCus
            onPress={() => onClose()}
            onClick={handleSubmit}
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
          {loading ? (
            <Loading />
          ) : (
            <Row align={"middle"} gutter={[8, 8]}>
              <Col xs={4} md={4} lg={3} xl={3}>
                <div className={styles.boxImgCommit}>
                  <img src={dataDetail?.item.item_image} />
                </div>
              </Col>
              <Col xs={20} md={20} lg={13} xl={13}>
                <Row className="mb-1">
                  <span>{dataDetail?.item.item_title}</span>
                </Row>
                <Row className="mb-1">
                  <Col xs={5} lg={4}>
                    <span className={`${styles.subText} ${styles.regular16}`}>UPC</span>
                  </Col>
                  <Col xs={19} lg={20}>
                    <span className={styles.regular16}>{dataDetail?.item.upc}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={12}>
                    <Row>
                      <Col xs={10} lg={8}>
                        <span className={`${styles.subText} ${styles.regular16}`}>Price</span>
                      </Col>
                      <Col xs={14} lg={16}>
                        <span className={styles.regular16}>${dataDetail?.price}</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} lg={12}>
                    <Row>
                      <Col xs={10} lg={10}>
                        <span className={`${styles.subText} ${styles.regular16}`}>Comm.</span>
                      </Col>
                      <Col xs={14} lg={14}>
                        <span className={styles.regular16}>${dataDetail?.commission}</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={24} lg={8} xl={8}>
                <InputNumber
                  placeholder="Enter amount"
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    amountRef.current = value;
                  }}
                />
                <span className={styles.allowText}>
                  Max Allowed Limit: {dataDetail?.commit_limit}
                </span>
                <Progress percent={50} strokeColor={twoColors} />
              </Col>
            </Row>
          )}
        </div>
      </StyledModalCommit>
    </>
  );
}
