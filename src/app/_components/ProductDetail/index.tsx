"use client";
import { Col, Flex, Modal, Row, Progress, InputNumber } from "antd";
import { ButtonCus } from "../ButtonCus";
import styles from "./styles.module.scss";
import { useState } from "react";
import ModalCommit from "./modalCommit";
import ModalView from "./modalView";
import { getDetailDeal } from "@/app/_api/AuthService";
import { useDispatch } from "react-redux";

export default function ProductDetail({ data }: any) {
  const [openView, setOpenView] = useState<boolean>(false);
  const [openCommit, setOpenCommit] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<any>();

  const showView = (value: string) => {
    (async () => {
      const res = await getDetailDeal(data?.deal_id);
      if (res) {
        if (value == "view") {
          setOpenView(true);
        } else {
          setOpenCommit(true);
        }
        setDataDetail(res.data);
      } else {
      }
    })();
  };
  const onCloseView = () => {
    setOpenView(false);
  };

  const onCloseCommit = () => {
    setOpenCommit(false);
  };

  const btnFooterRender = () => {
    if (data?.buyer_commitments > 0) {
      return (
        <Row justify="space-between" gutter={[16, 16]} align={"middle"} style={{ marginTop: 10 }}>
          <Col span={7}>
            <span className={styles.subTextInfo}>Committed</span>
            <span className={styles.subTextInfo}>QTY: {data?.buyer_commitments || 0}</span>
          </Col>
          <Col span={7}>
            <span className={styles.subTextInfo}>Fulfilled</span>
            <span className={styles.subTextInfo}>QTY: {data?.fulfilled_commitments || 0}</span>
          </Col>
          <Col span={10}>
            {data?.commit_limit > data?.commit_count ? (
              <ButtonCus
                onClick={() => showView("view")}
                style={{ width: "100%", borderRadius: 20, padding: 14 }}
                color="primary"
                variant="outlined"
                text="View deal"
              />
            ) : (
              <ButtonCus
                disabled
                style={{ width: "100%", borderRadius: 20, padding: 14 }}
                color="primary"
                variant="solid"
                text="Full"
              />
            )}
          </Col>
        </Row>
      );
    } else {
      return (
        <div className={styles.button}>
          {data?.commit_limit > data?.commit_count ? (
            <ButtonCus
              onClick={() => showView("commit")}
              style={{ width: "48%", borderRadius: 20, padding: 14 }}
              color="primary"
              variant="solid"
              text="Commit"
            />
          ) : (
            <ButtonCus
              disabled
              style={{ width: "48%", borderRadius: 20, padding: 14 }}
              color="primary"
              variant="solid"
              text="Full"
            />
          )}

          <ButtonCus
            onClick={() => showView("view")}
            style={{ width: "48%", borderRadius: 20, padding: 14 }}
            color="primary"
            variant="outlined"
            text="View deal"
          />
        </div>
      );
    }
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
        <div onClick={() => showView("view")} className={styles.boxImg}>
          <img src={data?.item?.item_image || "/nodata.svg"} />
          <div className={styles.tagProd}>
            {data?.rate < 0 ? (
              <span className={styles.redtag}>▼ ${data?.rate?.toFixed(2)}</span>
            ) : (
              <span className={styles.greentag}>▲ ${data?.rate?.toFixed(2)}</span>
            )}
          </div>
        </div>
        {/* <span className={styles.blackFri}>🔥 Black Friday</span> */}
        <span onClick={() => showView("view")} className={styles.textProduct}>
          {data?.item_title}
        </span>
        <Flex align="flex-end" justify="center">
          <span className={styles.price}>{data?.total}</span>
          {/* <span className={styles.oldprice}>{data?.old_price}</span> */}
        </Flex>

        {data?.deal_store?.length > 0 && (
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

        {btnFooterRender()}
      </div>
      <ModalView
        onClick={() => {
          onCloseView();
          showView("commit");
        }}
        onClose={onCloseView}
        openView={openView}
        dataDetail={dataDetail}
      />
      <ModalCommit onClose={onCloseCommit} openCommit={openCommit} dataDetail={dataDetail} />
    </Col>
  );
}
