"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Checkbox, DatePicker, Flex, Input, Radio, RadioChangeEvent, Select, Space } from "antd";
import { ButtonCus } from "../ButtonCus";

export const Tools = ({ data, setDataTools }: any) => {
  const handleClick = (itemName: any) => {
    if (itemName == "close") {
      setDataTools((prevData: any) => prevData.map((item: any) => ({ ...item, active: false })));
    } else {
      setDataTools((prevData: any) =>
        prevData.map((item: any) =>
          item.name === itemName ? { ...item, active: true } : { ...item, active: false },
        ),
      );
    }
  };

  return (
    <>
      <div className={styles.tools}>
        {data?.map((e: any, i: any) => (
          <>
            <div
              style={{ background: e.active ? "#8cb369" : "rgb(175, 175, 175)" }}
              key={i.toString()}
              onClick={() => handleClick(e.name)}
              className={styles.toolsItem}
            >
              <div className={styles.boxImg}>
                <img src={`${e.img}`} />
              </div>
            </div>
            {e?.active && <Form data={e.dataForm} />}
          </>
        ))}
      </div>
    </>
  );
};

const Form = ({ data }: any) => {
  const { Search } = Input;
  const { RangePicker } = DatePicker;
  const [value, setValue] = useState(1);
  const onCheckRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    console.log("Submitting form");
  };
  const onSearch = () => {};
  const onCheckbox = () => {};

  const onReset = () => {};
  const showSearch = () => {};
  if (data) {
    return (
      <div className={styles.formTools}>
        {data?.map((e: any, i: number) => (
          <div key={i.toString()}>
            <span
              style={{
                fontSize: e.category == "Search" ? "16px" : "14px",
                color: e.category == "Search" ? "#f4a259" : "#8cb369",
              }}
              className={styles.mainText}
            >
              {e.category}
            </span>
            {e?.dataSearch?.map((item: any, index: number) => (
              <Search
                key={index.toString()}
                placeholder={item.name}
                onSearch={onSearch}
                enterButton
                className={styles.searchForm}
              />
            ))}
            <Space direction="vertical">
              {e?.dataStatus?.map((item: any, index: number) => (
                <Checkbox
                  key={index.toString()}
                  onChange={onCheckbox}
                  className={styles.statusForm}
                >
                  {item.name}
                </Checkbox>
              ))}
            </Space>
            <Space direction="vertical">
              <Radio.Group onChange={onCheckRadio} value={value}>
                {e?.dataTracking?.map((item: any, index: number) => (
                  <Radio key={index.toString()} value={item.name} className={styles.trackingForm}>
                    {item.name}
                  </Radio>
                ))}
              </Radio.Group>
            </Space>

            {e?.dataPeriod?.map((item: any, index: number) => (
              <>
                <Select
                  style={{ width: "100%", marginBottom: 10 }}
                  options={item?.data.map((e: any, i: any) => {
                    return {
                      value: e?.time,
                      label: e?.time,
                    };
                  })}
                />
                <RangePicker style={{ width: "100%" }} />
                <Flex justify="space-between" style={{ marginTop: 12 }}>
                  <ButtonCus
                    onClick={onReset}
                    style={{ width: "48%", borderRadius: 20, padding: 14 }}
                    color="primary"
                    variant="outlined"
                    text="Reset"
                  />
                  <ButtonCus
                    onClick={showSearch}
                    style={{ width: "48%", borderRadius: 20, padding: 14 }}
                    color="primary"
                    variant="filled"
                    text="Search"
                  />
                </Flex>
              </>
            ))}
          </div>
        ))}
      </div>
    );
  }
};
