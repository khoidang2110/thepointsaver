"use client";
import React, { useEffect, useState } from "react";
import { Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import styles from "./styles.module.scss";
import { Tools } from "../Tools";
import "../styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCommitmentsRequest } from "@/app/store/user/actions";

interface DataType {
  key: React.Key;
  commitment_id: string;
  count: number;
  created_at: string;
  deal_id: string;
  end_date: string;
  item_model: string;
  item_title: string;
  price: number;
  status: string;
  total: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Deal",
    dataIndex: "deal",
    width: "500px",
    sorter: (a, b) => {
      if (a.deal_id < b.deal_id) {
        return -1;
      }
      if (a.deal_id > b.deal_id) {
        return 1;
      }
      return 0;
    },
    render: (text, record) => {
      return (
        <Flex align="center">
          {/* <div className={styles.boxImg}>
            <img src={record.img} />
          </div> */}
          <div className={styles.info}>
            <span className={styles.mainTextTable}>{record.item_title}</span>
            {/* <Flex className={styles.item}>
              <span className={styles.subTextTable}>SKU</span>
              <span className={styles.mainTextTable}>{record.sku}</span>
            </Flex> */}
            <Flex>
              <Flex className={`${styles.item} ${styles.mr10}`}>
                <span className={styles.subTextTable}>Deal Id</span>
                <span>{record.deal_id}</span>
              </Flex>
              <Flex className={styles.item}>
                <span className={styles.subTextTable}>Comm. Id</span>
                <span>{record.commitment_id}</span>
              </Flex>
            </Flex>
          </div>
        </Flex>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",

    sorter: (a, b) => {
      if (a.status < b.status) {
        return -1;
      }
      if (a.status > b.status) {
        return 1;
      }
      return 0;
    },
    render: (text, record) => {
      return (
        <>
          <span className={styles.greentag}>Active</span>
          <div className={styles.itemCommit}>
            <span className={styles.nameItem}>Count</span>
            <span>{record?.count}</span>
          </div>
        </>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    render: (text, record) => {
      return (
        <>
          <span>${record?.price}</span>
          <div className={styles.itemCommit}>
            {/* <span className={styles.nameItem}>Fulfilled</span>
            <span>{record?.fulfilled}</span> */}
          </div>
        </>
      );
    },
  },
  // {
  //   title: "Comm.",
  //   dataIndex: "comm",
  //   sorter: (a, b) => a.comm - b.comm,
  // },
  {
    title: "Total",
    dataIndex: "total",
    sorter: (a, b) => a.total - b.total,
    render: (text, record) => {
      return (
        <>
          <span>${record?.total}</span>
        </>
      );
    },
  },
  {
    title: "Create Date",
    dataIndex: "created_at",
    sorter: (a, b) => {
      if (a.created_at < b.created_at) {
        return -1;
      }
      if (a.created_at > b.created_at) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "Expiry Day",
    dataIndex: "end_date",
    sorter: (a, b) => {
      if (a.end_date < b.end_date) {
        return -1;
      }
      if (a.end_date > b.end_date) {
        return 1;
      }
      return 0;
    },
  },
];

const data = [
  {
    key: "1",
    deal: "Amazon - Echo Pop (1St Gen, 2023 Release) Full Sound Compact Smart Speaker With Alexa - Lavender Bloom",
    status: "active",
    price: 200,
    comm: 10,
    sku: "Amazon-Echo-Pop-Lavender-Bloom-4804",
    dealId: "DL-11240025",
    commitId: "CM-2484913377",
    total: 55.47,
    createDate: "11-04-2024, 15:53:11",
    expiryDay: "11-30-2024",
    count: 3,
    fulfilled: 0,
    img: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6544/6544306cv1d.jpg",
  },
  {
    key: "2",
    deal: "aaa",
    status: "active",
    price: 200,
    comm: 10,
    sku: "Amazon-Echo-Pop-Lavender-Bloom-4804",
    dealId: "DL-11240025",
    commitId: "CM-2484913377",
    total: 55.47,
    createDate: "11-04-2024, 15:53:11",
    expiryDay: "1-30-2024",
    count: 3,
    fulfilled: 0,
    img: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6544/6544306cv1d.jpg",
  },
  {
    key: "3",
    deal: " Brown",
    status: "active",
    price: 200,
    comm: 10,
    sku: "Amazon-Echo-Pop-Lavender-Bloom-4804",
    dealId: "DL-11240025",
    commitId: "CM-2484913377",
    total: 55.47,
    createDate: "11-04-2024, 15:53:11",
    expiryDay: "11-30-2024",
    count: 3,
    fulfilled: 0,
    img: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6544/6544306cv1d.jpg",
  },
];

const onChange: TableProps<DataType>["onChange"] = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const DataTable: React.FC = () => {
  const [dataTools, setDataTools] = useState<any>([
    {
      name: "search",
      img: "/search.svg",
      active: false,
      dataForm: [
        {
          category: "Search",
          dataSearch: [{ name: "CommitmentID" }, { name: "DealID" }, { name: "Item" }],
        },
        {
          category: "Status",
          dataStatus: [
            { name: "Active" },
            { name: "Expired" },
            { name: "Fulfilled" },
            { name: "Partially Fulfilled" },
            { name: "Voided" },
          ],
        },
        {
          category: "Tracking Link Required",
          dataTracking: [{ name: "All" }, { name: "Y" }, { name: "N" }],
        },
      ],
    },
    {
      name: "calender",
      img: "/calendar.svg",
      active: false,
      dataForm: [
        {
          category: "Period",
          dataPeriod: [
            {
              data: [
                { time: "Today" },
                { time: "Last 3 days" },
                { time: "This Week" },
                { time: "Last 7 days" },
                { time: "This 10 days" },
                { time: "This Month" },
                { time: "Last 30 days" },
                { time: "Last 3 months" },
                { time: "This Year" },
                { time: "Last Year" },
              ],
              dateTime: "Date",
            },
          ],
        },
      ],
    },

    { name: "sum", img: "/card.svg", active: false },
    {
      name: "close",
      img: "/close.svg",
      active: false,
    },
  ]);
  const dispatch = useDispatch();
  const dataCommit = useSelector((state: any) => state.user.dataCommit);
  console.log("dataCommit", dataCommit);
  useEffect(() => {
    const payload = { page: 1, size: 10 };
    dispatch(getCommitmentsRequest(payload));
  }, []);

  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={dataCommit.commitments}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        tableLayout="fixed"
        scroll={{ x: 1400 }}
        style={{ width: 1400, minWidth: "100%" }}
      />
      <Tools data={dataTools} setDataTools={setDataTools} />
    </>
  );
};

export default DataTable;
