"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Col, Row, Flex } from "antd";
import { ButtonCus } from "./_components";
import Slider from "react-slick";
import DataTable from "./_components/DataTable";

const Home = () => {
  var settings = {
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

  const dataProd = [
    {
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

  return (
    <div className="App">
      <div className={styles.sectionDashboard}>
        <span className={styles.name}>Welcome back, Khoi U-7940</span>
        <span className={styles.datetime}>Tue 12 Nov, 2024</span>
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
        <Row gutter={[16, 16]} className={styles.statistical}>
          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className={styles.formItem}>
                  <span className={styles.mainText}>Orders</span>
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
                <div className={styles.formItem}>
                  <span className={styles.mainText}>Orders</span>
                  <span className={styles.moneyBig}>$0.00</span>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className={styles.formItem}>
                  <span className={styles.mainText}>Orders</span>
                  <span className={styles.moneyBig}>$0.00</span>
                </div>
              </Col>
            </Row>
            <Row className={styles.full}>
              <Col span={24}>
                <div className={styles.formItem}>
                  <span className={styles.mainText}>Orders</span>
                  <Row>
                    <Col xs={12} sm={12} lg={3} className={styles.moreItem}>
                      <span className={styles.title}>Adjustment</span>
                      <span className={styles.money}>$0.00</span>
                    </Col>
                    <Col xs={12} sm={12} lg={3} className={styles.moreItem}>
                      <span className={styles.title}>Requested</span>
                      <span className={styles.money}>$0.00</span>
                    </Col>
                    <Col xs={12} sm={12} lg={3} className={styles.moreItem}>
                      <span className={styles.title}>Processing</span>
                      <span className={styles.money}>$0.00</span>
                    </Col>
                    <Col xs={12} sm={12} lg={3} className={styles.moreItem}>
                      <span className={styles.title}>Paid</span>
                      <span className={styles.money}>$0.00</span>
                    </Col>
                    <Col xs={12} sm={12} lg={3} className={styles.moreItem}>
                      <span className={styles.title}>Sent</span>
                      <span className={styles.money}>$0.00</span>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <div className={styles.formItem}>
              <span className={styles.mainText}>Update</span>
            </div>
          </Col>
        </Row>
        <Slider {...settings} className={styles.product}>
          {dataProd.map((e, i) => (
            <Col key={i.toString()} span={22}>
              {e?.tag && (
                <div className={styles.tag}>
                  <span>Below cost</span>
                </div>
              )}
              <div
                className={styles.formProduct}
                style={{ borderTop: e?.tag ? `4px solid red` : "none" }}
              >
                <div className={styles.boxImg}>
                  <img src="https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"></img>
                </div>
                <span className={styles.mainText}>{e?.name}</span>
                <span className={styles.price}>{e?.price}</span>
                <div className={styles.moreInfo}>
                  <Flex>
                    {e?.brand.map((item, i) => (
                      <div key={i.toString()} className={styles.boxImg}>
                        <img
                          key={i.toString()}
                          src={item?.img}
                          alt={item?.name}
                        />
                      </div>
                    ))}
                  </Flex>

                  <span className={styles.time}>{e?.time}</span>
                </div>
                <div className={styles.button}>
                  <ButtonCus color="primary" variant="solid" text="Commit" />
                  <ButtonCus
                    color="primary"
                    variant="outlined"
                    text="View deal"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Slider>
        <div className={styles.table}>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
