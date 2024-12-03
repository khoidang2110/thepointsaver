"use client";
import { Col, Pagination, Row, Tabs } from "antd";
import FilterOptions from "../_components/FilterOptions";
import ProductDetail from "../_components/ProductDetail";
import { useEffect, useState } from "react";
import { getAllDeal } from "../_api/AuthService";
import Loading from "../_components/Loading";

const Deals = () => {
  const [dataDeals, setDataDeals] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [data, setData] = useState<any>({ page: 1, size: 5, data_type: "onSale" });
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await getAllDeal(data);
      if (res) {
        setLoading(false);
        setDataDeals(res?.data);
      }
      setLoading(false);
    })();
  }, [data]);

  const payloadData = (value: any) => {
    setData((prevDataUser: any) => {
      return {
        ...prevDataUser, // Spread the previous dataUser values
        ...value, // Merge in the new data
      };
    });
  };

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
    payloadData({ page: page, size: size });
  };

  const onSearch = (value: any) => {
    payloadData({ optional: value });
  };
  const onChange = (key: any, value: any) => {
    payloadData({ [key]: value });
  };

  const { TabPane } = Tabs;
  // Handle tab change
  const handleTabChange = (key: any) => {
    payloadData({ data_type: key });
  };
  const dataTab = [
    {
      name: "On Sale Now",
      key: "on_sale_now",
    },
    {
      name: "Below Cost",
      key: "below_cost",
    },
    // {
    //   name: "In Store",
    //   key: "inStore",
    // },
    {
      name: "All Active",
      key: "active",
    },
  ];

  return (
    <>
      {loading && <Loading />}
      <Tabs defaultActiveKey={dataTab[0].name} onChange={handleTabChange}>
        {dataTab?.map((e: any) => (
          <TabPane tab={e.name} key={e.key}>
            <FilterOptions onSearch={onSearch} onChange={onChange} />
            <Row gutter={[16, 16]}>
              {dataDeals?.deals?.length > 0 &&
                dataDeals.deals?.map((item: any, i: any) => (
                  <Col key={i.toString()} xs={24} sm={24} md={12} lg={8} xl={6}>
                    <ProductDetail data={item} />
                  </Col>
                ))}
            </Row>

            <Pagination
              align="end"
              current={currentPage}
              pageSize={pageSize}
              total={dataDeals?.total_count}
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
