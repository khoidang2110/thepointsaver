"use client";
import { Space, Table, Tabs, Tag, Typography } from "antd";
import "./style.module.scss";
import DataTable from "../_components/DataTable";

const MyCommitments = () => {
  const { TabPane } = Tabs;
  const dataTab = [
    {
      name: "My Commitments",
    },
    {
      name: "Commitment Orders",
    },
  ];
  const handleTabChange = () => {};
  return (
    <Tabs defaultActiveKey={dataTab[0].name} onChange={handleTabChange}>
      {dataTab?.map((e, index) => (
        <TabPane tab={e.name} key={e.name}>
          <DataTable />
        </TabPane>
      ))}
    </Tabs>
  );
};

export default MyCommitments;
