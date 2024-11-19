"use client";

import React from "react";
import { Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import styles from "./styles.module.scss";
import "../styles.scss";
import styled from "styled-components";
interface DataType {
  orderId: string;
  trackId: string;
  void: boolean;
  status: string;
  method: string;
  qty: number;
  count: number;
  comm: number;
  total: number;
  createDate: string;
  modifiedDate: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Order Id",
    dataIndex: "orderId",
    width: "200px",
    sorter: (a, b) => {
      if (a.orderId < b.orderId) {
        return -1;
      }
      if (a.orderId > b.orderId) {
        return 1;
      }
      return 0;
    },
    render: (text, record) => {
      return (
        <>
          <span>{record?.orderId}</span>
          <span>Track. No.</span>
          <span>Alt Track No</span>
        </>
      );
    },
  },
  {
    title: "Track. Id",
    dataIndex: "trackId",
    sorter: (a, b) => {
      if (a.trackId < b.trackId) {
        return -1;
      }
      if (a.trackId > b.trackId) {
        return 1;
      }
      return 0;
    },
    render: (text, record) => {
      return <span>{record.trackId}</span>;
    },
  },
  {
    title: "Void",
    dataIndex: "comm",
    sorter: (a, b) => a.comm - b.comm,
  },
  {
    title: "Status",
    dataIndex: "status",
    width: "180px",
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
          {record.status == "confirmed" ? (
            <span className={styles.greentag}>Confirmed</span>
          ) : (
            <span className={styles.yellowtag}>Partially Confirmed</span>
          )}
        </>
      );
    },
  },
  {
    title: "Method",
    dataIndex: "method",
    sorter: (a, b) => {
      if (a.method < b.method) {
        return -1;
      }
      if (a.method > b.method) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "Qty",
    dataIndex: "qty",
    sorter: (a, b) => a.qty - b.qty,
  },
  {
    title: "Count",
    dataIndex: "count",
    sorter: (a, b) => a.count - b.count,
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
    title: "Modified Date",
    dataIndex: "modifiedDate",
    sorter: (a, b) => {
      if (a.modifiedDate < b.modifiedDate) {
        return -1;
      }
      if (a.modifiedDate > b.modifiedDate) {
        return 1;
      }
      return 0;
    },
  },
];

const data = [
  {
    orderId: "R-112344",
    trackId: "O-1234422",
    void: true,
    status: "active",
    method: "DROP OFF",
    qty: 33,
    count: 8,
    comm: 15.28,
    total: 200,
    createDate: "11-04-2024, 15:53:11",
    modifiedDate: "11-30-2024",
  },
  {
    orderId: "R-112344",
    trackId: "O-1234422",
    void: true,
    status: "confirmed",
    method: "DROP OFF",
    qty: 33,
    count: 8,
    comm: 15.28,
    total: 200,
    createDate: "11-04-2024, 15:53:11",
    modifiedDate: "11-30-2024",
  },
  {
    orderId: "R-112344",
    trackId: "O-1234422",
    void: true,
    status: "confirmed",
    method: "DROP OFF",
    qty: 33,
    count: 8,
    comm: 15.28,
    total: 200,
    createDate: "11-04-2024, 15:53:11",
    modifiedDate: "11-30-2024",
  },
];

const StyledTable = styled(Table)`
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

const onChange: TableProps<DataType>["onChange"] = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const DataTableOrder: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{ target: "sorter-icon" }}
    tableLayout="fixed"
    scroll={{ x: 1400 }}
    style={{ width: 1400, minWidth: "100%" }}
  />
);

export default DataTableOrder;
