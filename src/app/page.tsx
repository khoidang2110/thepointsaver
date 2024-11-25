"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Col, Row, Flex } from "antd";
import ProductDetail from "./_components/ProductDetail";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useWindowSize } from "./_utils";
import { getAllProduct } from "./_api/AuthService";

const Home = () => {
  const size = useWindowSize();
  const [sizeWidth, setSizeWidth] = useState<any>();

  // useEffect(() => {
  //   (async () => {
  //     const res = await getAllProduct();
  //     console.log("res", res);
  //   })();
  // }, []);

  const dataNoti = [
    {
      name: "BG Deals Commitment Update",
      des: "As many of you know, your user tier increases as you place more orders with us, allowing access to higher-tier levels and higher limits on deals. Consistent accuracy in your commitments helps you maintain and improve your tier level for deal participation. In response to your feedback, we’re implementing measures to address bot activity and ensure fair access to deals. Users who frequently commit but don’t complete orders may see their tier level decrease, creating more opportunities for other buyers. Additionally, any account caught using a bot for commitments will lose deal access on BG. Thank you for supporting our efforts to enhance the BG user experience. We’re committed to making the platform better for everyone",
    },
    {
      name: "BG Deals Commitment Update",
      des: "As many of you know, your user tier increases as you place more orders with us, allowing access to higher-tier levels and higher limits on deals. Consistent accuracy in your commitments helps you maintain and improve your tier level for deal participation. In response to your feedback, we’re implementing measures to address bot activity and ensure fair access to deals. Users who frequently commit but don’t complete orders may see their tier level decrease, creating more opportunities for other buyers. Additionally, any account caught using a bot for commitments will lose deal access on BG. Thank you for supporting our efforts to enhance the BG user experience. We’re committed to making the platform better for everyone",
    },
  ];

  const dataCommitments = [
    {
      name: "AMAZON-ECHO-POP-LAVENDER-BLOOM-4804",
      price: "$55.47",
      active: true,
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    },
    {
      name: "AMAZON-ECHO-POP-LAVENDER-BLOOM-4804",
      price: "$1120",
      active: true,
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    },
  ];

  const dataProd = [
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
    {
      img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
      price: "$19.00",
      tag: "Below",
      time: "ED 11-23-2024",
      brand: [
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
        {
          name: "Amazon",
          img: "https://logo.clearbit.com/amazon.com",
        },
      ],
    },
  ];

  const dataReport = [
    {
      img: "https://buyinggroup.com/static/media/dashboard_container_filled.1a79ce62.svg",
      name: "Add tracking number",
    },
    {
      img: "https://buyinggroup.com/static/media/dashboard_container_filled.1a79ce62.svg",
      name: "Request Shipping Label",
    },
    {
      img: "https://buyinggroup.com/static/media/dashboard_container_filled.1a79ce62.svg",
      name: "Request Payment",
    },

    {
      img: "https://buyinggroup.com/static/media/dashboard_container_filled.1a79ce62.svg",
      name: "Payment Details",
    },
  ];

  useEffect(() => {
    if (size.width) {
      if (size.width > 1200) {
        setSizeWidth(5);
      }
      if (size.width > 900 && size.width < 1200) {
        setSizeWidth(3);
      }
      if (size.width < 900) {
        setSizeWidth(1);
      }
    }
  }, [size.width]);

  return (
    <div className="App">
      <div className={styles.sectionDashboard}>
        <span className={styles.name}>Welcome back, Khoi U-7940</span>
        <span className={styles.datetime}>Tue 12 Nov, 2024</span>
        {/* noti */}
        <Row gutter={[16, 16]} className={styles.noti}>
          {dataNoti.map((e, i) => (
            <Col key={i.toString()} xs={24} lg={12}>
              <div className={styles.notiForm}>
                <div className={styles.mainText}>{e?.name}</div>
                <span className={styles.subText}>{e?.des}</span>
              </div>
            </Col>
          ))}
        </Row>
        {/* report */}
        <Row gutter={[16, 16]} className={styles.m1}>
          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className={`${styles.formItem} ${styles.h120}`}>
                  <Flex align="center">
                    <div className={styles.boxIcon}>
                      <img src="https://buyinggroup.com/static/media/all_balances.59192541.svg" />
                    </div>
                    <span className={styles.headerText}>Orders</span>
                  </Flex>
                  <Flex gap="middle" justify="space-between">
                    <div className={styles.moreItem}>
                      <span className={styles.title}>Amount</span>
                      <span className={styles.money}>$0.00</span>
                    </div>
                    <div className={styles.moreItem}>
                      <span className={styles.title}>Amount</span>
                      <span className={styles.money}>$0.00</span>
                    </div>
                  </Flex>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className={`${styles.formItem} ${styles.h120}`}>
                  <Flex align="center">
                    <div className={styles.boxIcon}>
                      <img src="https://buyinggroup.com/static/media/all_balances.59192541.svg" />
                    </div>
                    <span className={styles.headerText}>Balance</span>
                  </Flex>

                  <span className={styles.moneyBig}>$0.00</span>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className={`${styles.formItem} ${styles.h120}`}>
                  <Flex align="center">
                    <div className={styles.boxIcon}>
                      <img src="https://buyinggroup.com/static/media/all_balances.59192541.svg" />
                    </div>
                    <span className={styles.headerText}>Trackings</span>
                  </Flex>
                  <span className={styles.moneyBig}>$0.00</span>
                </div>
              </Col>
            </Row>
            <Row className={styles.full}>
              <Col span={24}>
                <div className={styles.formItem}>
                  <Flex align="center">
                    <div className={styles.boxIcon}>
                      <img src="https://buyinggroup.com/static/media/all_balances.59192541.svg" />
                    </div>
                    <span className={styles.headerText}>Payments</span>
                  </Flex>
                  <Row justify="space-between">
                    <Col xs={12} sm={12} md={12} lg={4} className={styles.moreItem}>
                      <span className={styles.title}>Adjustment</span>
                      <Flex align="center">
                        <span className={styles.money}>$0.00</span>
                        <span className={styles.smallmoney}>$0.00</span>
                      </Flex>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className={styles.moreItem}>
                      <span className={styles.title}>Requested</span>
                      <Flex align="center">
                        <span className={styles.money}>$0.00</span>
                        <span className={styles.smallmoney}>$0.00</span>
                      </Flex>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className={styles.moreItem}>
                      <span className={styles.title}>Processing</span>
                      <Flex align="center">
                        <span className={styles.money}>$0.00</span>
                        <span className={styles.smallmoney}>$0.00</span>
                      </Flex>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className={styles.moreItem}>
                      <span className={styles.title}>Paid</span>
                      <Flex align="center">
                        <span className={styles.money}>$0.00</span>
                        <span className={styles.smallmoney}>$0.00</span>
                      </Flex>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className={styles.moreItem}>
                      <span className={styles.title}>Sent</span>
                      <Flex align="center">
                        <span className={styles.money}>$0.00</span>
                        <span className={styles.smallmoney}>$0.00</span>
                      </Flex>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <div className={styles.update}>
              <Flex align="center">
                <div className={styles.boxIcon}>
                  <img src="https://buyinggroup.com/static/media/all_balances.59192541.svg" />
                </div>
                <span className={styles.headerText}>Updates</span>
              </Flex>
              <div className={styles.boxNodata}>
                <img src="/nodata.svg" />
              </div>
            </div>
          </Col>
        </Row>
        {/* what w u like to do */}
        <Row gutter={[16, 16]} className={`${styles.m1} ${styles.todo}`}>
          <Col xs={24} sm={24} md={12} lg={4}>
            <span className={styles.mainText}>What would you like to do?</span>
          </Col>
          {dataReport.map((e, i) => (
            <Col xs={24} sm={24} md={12} lg={5}>
              <div className={styles.todoItem}>
                <div className={styles.boxImg}>
                  <img src={e?.img} />
                </div>
                <span>{e?.name}</span>
              </div>
            </Col>
          ))}
        </Row>
        {/* product */}
        {sizeWidth && (
          <Swiper
            spaceBetween={12}
            slidesPerView={sizeWidth}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {dataProd.map((e, i) => (
              <SwiperSlide key={i.toString()}>
                <ProductDetail data={e} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* table - commit */}
        <Row gutter={[16, 16]} className={styles.m1}>
          {/* <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.table}>
              <span className={styles.headerText}>My Orders</span>
              <DataTable />
            </div>
          </Col> */}
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.lastCommit}>
              <span className={styles.headerText}>Last Commitments</span>
              {dataCommitments?.map((e, i) => (
                <Row gutter={[8, 8]} key={i.toString()} className={styles.commitItem}>
                  <Col xs={8} sm={8} lg={6} xl={5}>
                    <div className={styles.boxImg}>
                      <img src={e.img}></img>
                    </div>

                    <div className={styles.tag}>
                      <span className={styles.redtag}>Exp. 11-30-2024</span>
                    </div>
                  </Col>
                  <Col xs={16} sm={16} lg={11} xl={12}>
                    <span className={styles.textProduct}>{e.name}</span>
                    <Flex align="center">
                      <span className={styles.price}>{e.price}</span>
                      {e?.active && <span className={styles.greentag}>Active</span>}
                    </Flex>
                  </Col>
                  <Col xs={24} sm={24} lg={7} xl={7} className={styles.moreInfo}>
                    <Flex justify="space-between">
                      <span>Comm.QTY</span>
                      <span>3</span>
                    </Flex>
                    <Flex justify="space-between">
                      <span>Comm.QTY</span>
                      <span>0</span>
                    </Flex>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
