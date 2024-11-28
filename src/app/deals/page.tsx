"use client";
import { Col, Pagination, Row, Tabs } from "antd";
import FilterOptions from "../_components/FilterOptions";
import ProductDetail from "../_components/ProductDetail";
import { useEffect, useState } from "react";
import { getAllDeal } from "../_api/AuthService";
const Deals = () => {
  const [dataDeals, setDataDeals] = useState<any>();
  const [total, setTotal] = useState(100); // Total number of items
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataPayload, setDataPayload] = useState("");
  useEffect(() => {
    (async () => {
      const payload = { page: currentPage, size: pageSize };
      const res = await getAllDeal(payload);
      console.log("res", res);
      setDataDeals(res?.data);
    })();
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };
  const onSearch = (value: any) => {
    const payload = { page: currentPage, size: pageSize, key: value };
    console.log("payloadxx", payload);
  };

  // const dataProd = [
  //   {
  //     img: "https://i5.walmartimages.com/asr/fff458b8-4eff-491d-af67-34968fe58531.57b1a2f9f198a430353cf8bde1c1ed80.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
  //     name: "Dualsense Wireless Controller For Playstation 5 - Fortnite Limited Edition",
  //     price: "$19.00",
  //     tag: "Below",
  //     time: "ED 11-23-2024",
  //     brand: [
  //       {
  //         name: "Amazon",
  //         img: "https://logo.clearbit.com/amazon.com",
  //       },
  //       {
  //         name: "Amazon",
  //         img: "https://logo.clearbit.com/amazon.com",
  //       },
  //     ],
  //   },
  // ];

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
            <FilterOptions onSearch={onSearch} />
            <Row gutter={[16, 16]}>
              {dataDeals &&
                dataDeals?.map((item: any, i: any) => (
                  <Col key={i.toString()} xs={24} sm={24} md={12} lg={8} xl={6}>
                    <ProductDetail data={item} />
                  </Col>
                ))}
            </Row>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={total}
              onChange={handlePageChange}
              showSizeChanger
              pageSizeOptions={["5", "10", "20", "50"]}
            />
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default Deals;
