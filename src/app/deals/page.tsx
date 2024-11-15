"use client";
import { Col, Row, Tabs } from "antd";
import FilterOptions from "../_components/FilterOptions";
import ProductDetail from "../_components/ProductDetail";
const Deals = () => {
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

  const { TabPane } = Tabs;
  // Handle tab change
  const handleTabChange = (key: any) => {};
  const dataTab = [
    {
      name: "On Sale Now",
    },
    {
      name: "Below Cost",
    },
    {
      name: "In Store",
    },
    {
      name: "All Active",
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey={dataTab[0].name} onChange={handleTabChange}>
        {dataTab?.map((e, index) => (
          <TabPane tab={e.name} key={e.name}>
            <FilterOptions />
            <Row gutter={[16, 16]}>
              {dataProd?.map((item, i) => (
                <Col key={i.toString()} xs={24} sm={24} md={12} lg={8} xl={6}>
                  <ProductDetail data={item} />
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default Deals;
