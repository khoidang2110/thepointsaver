"use client";
import { Col, Tabs, Flex, Input, Row, Select, Slider } from "antd";
import styles from "./styles.module.scss";
import "./styles.scss";

export default function FilterOptions({ onSearch, onChange }: any) {
  const { Search } = Input;
  const formatter = (value: any) => `${value * 100}`;
  const marks = {
    0: "$0",
    100: "$10,000+",
  };
  return (
    <Row gutter={[10, 10]} className={styles.tool}>
      <Col xs={18} md={8} lg={4}>
        <Search placeholder="Deal | Item UPC" onSearch={onSearch} enterButton />
      </Col>
      <Col>
        <Flex align="center" className={styles.customSelect}>
          <div>
            <img src="https://buyinggroup.com/static/media/sorting-icon.f73dcc85.svg" />
          </div>
          <Select
            onChange={(value) => onChange("price", value)}
            dropdownStyle={{
              width: "fit-content",
            }}
          >
            <Select.Option value="descPrice">Highest to Lowest Price</Select.Option>
            <Select.Option value="ascPrice">Lowest to Highest Price</Select.Option>
            <Select.Option value="descComm">Highest to Lowest Comm.</Select.Option>
            <Select.Option value="ascComm">Lowest to Highest Comm.</Select.Option>
          </Select>
        </Flex>
      </Col>
      <Col xs={14} md={6} lg={4}>
        <Select
          onChange={(value) => onChange("store", value)}
          style={{ width: "100%" }}
          showSearch
          placeholder="Stores"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: "1", label: "Jack" },
            { value: "2", label: "Lucy" },
            { value: "3", label: "Tom" },
          ]}
        />
      </Col>
      <Col>
        <Flex align="center" className={styles.customSelect}>
          <div>
            <span className={styles.text}>Locked:</span>
          </div>
          <Select
            dropdownStyle={{ width: "fit-content" }}
            onChange={(value) => onChange("locked", value)}
          >
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Flex>
      </Col>
      <Col>
        <Flex align="center" className={styles.customSelect}>
          <div>
            <span className={styles.text}>is Full:</span>
          </div>
          <Select
            dropdownStyle={{ width: "fit-content" }}
            onChange={(value) => onChange("isFull", value)}
          >
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Flex>
      </Col>
      <Col xs={12} lg={4}>
        <Slider
          onChangeComplete={(value) => onChange("slider", value * 100)}
          marks={marks}
          tooltip={{
            formatter,
          }}
        />
      </Col>
    </Row>
  );
}
