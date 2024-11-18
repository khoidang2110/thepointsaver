"use client";
import React from "react";
import { Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  deal: string;
  status: string;
  price: number;
  comm: number;
  count: number;
  fulfilled: number;
  img: string;
  sku: string;
  dealId: string;
  commitId: string;
  total: number;
  createDate: string;
  expiryDay: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Deal",
    dataIndex: "deal",
    sorter: (a, b) => {
      if (a.deal < b.deal) {
        return -1;
      }
      if (a.deal > b.deal) {
        return 1;
      }
      return 0;
    },
    render: (text, record) => {
      return (
        <Flex align="center">
          <div className={styles.boxImg}>
            <img src={record.img} />
          </div>
          <div className={styles.info}>
            <span className={styles.mainTextTable}>{record.deal}</span>
            <Flex className={styles.item}>
              <span className={styles.subTextTable}>SKU</span>
              <span className={styles.mainTextTable}>{record.sku}</span>
            </Flex>
            <Flex>
              <Flex className={`${styles.item} ${styles.mr10}`}>
                <span className={styles.subTextTable}>Deal Id</span>
                <span>{record.dealId}</span>
              </Flex>
              <Flex className={styles.item}>
                <span className={styles.subTextTable}>Comm. Id</span>
                <span>{record.commitId}</span>
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
          <span>{record?.price}</span>
          <div className={styles.itemCommit}>
            <span className={styles.nameItem}>Fulfilled</span>
            <span>{record?.fulfilled}</span>
          </div>
        </>
      );
    },
  },
  {
    title: "Comm.",
    dataIndex: "comm",
    sorter: (a, b) => a.comm - b.comm,
  },
  {
    title: "Total",
    dataIndex: "total",
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: "Create Date",
    dataIndex: "createDate",
    sorter: (a, b) => {
      if (a.createDate < b.createDate) {
        return -1;
      }
      if (a.createDate > b.createDate) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "Expiry Day",
    dataIndex: "expiryDay",
    sorter: (a, b) => {
      if (a.expiryDay < b.expiryDay) {
        return -1;
      }
      if (a.expiryDay > b.expiryDay) {
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

const DataTable: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{ target: "sorter-icon" }}
  />
);

export default DataTable;
