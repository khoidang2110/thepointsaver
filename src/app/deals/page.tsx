"use client";
import { Col, Pagination, Row, Tabs } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterOptions from "../_components/FilterOptions";
import Loading from "../_components/Loading";
import ProductDetail from "../_components/ProductDetail";
import { getDataDealRequest, getDealRequest } from "../store/user/actions";
import { getListStore } from "../_api/AuthService";

const Deals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState<boolean>();
  const [dataStore, setDataStore] = useState();

  const dispatch = useDispatch();
  const dataDeals = useSelector((state: any) => state.user.payloadDeal);
  const dataResDeals = useSelector((state: any) => state.user.dataDeal);

  useEffect(() => {
    payloadData({ data_type: localStorage.getItem("tabDeals") || "on_sale_now" });
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getListStore();
      setDataStore(res.data);
    })();
  }, []);

  useEffect(() => {
    dispatch(getDealRequest(dataDeals));
  }, [dataDeals]);

  const payloadData = (value: any) => {
    dispatch(getDataDealRequest(value));
  };

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
    payloadData({ page: page, size: size });
  };

  const onSearch = (value: any) => {
    payloadData({ key: value });
  };
  const onChange = (key: any, value: any) => {
    if (key == "slider") {
      const minValue = Math.min(...value);
      const maxValue = Math.max(...value);
      payloadData({ price_min: minValue, price_max: maxValue });
      return;
    } else {
      payloadData({ [key]: value });
    }
  };

  const { TabPane } = Tabs;
  // Handle tab change
  const handleTabChange = (key: any) => {
    payloadData({ data_type: key });
    localStorage.setItem("tabDeals", key);
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
    {
      name: "In Store",
      key: "in_store",
    },
    {
      name: "All Active",
      key: "active",
    },
  ];

  return (
    <>
      {loading && <Loading />}
      <Tabs
        defaultActiveKey={localStorage.getItem("tabDeals") || dataTab[0].key}
        onChange={handleTabChange}
      >
        {dataTab?.map((e: any) => (
          <TabPane tab={e.name} key={e.key}>
            <FilterOptions onSearch={onSearch} onChange={onChange} dataStore={dataStore} />
            <Row gutter={[16, 16]}>
              {dataResDeals?.deals?.length > 0 &&
                dataResDeals.deals?.map((item: any, i: any) => (
                  <Col key={i.toString()} xs={24} sm={24} md={12} lg={8} xl={6}>
                    <ProductDetail data={item} />
                  </Col>
                ))}
            </Row>

            <Pagination
              align="end"
              current={currentPage}
              pageSize={pageSize}
              total={dataResDeals?.total_count}
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
