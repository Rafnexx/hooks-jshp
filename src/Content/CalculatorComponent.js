import React from "react";
import { Table, Tag, Row, Col, Icon } from "antd";
import CurrencyConverter from "./CurrencyConverter";

const columns = [
  {
    title: "currency",
    dataIndex: "currency",
    key: "currency",
    render: currency => (
      <span>
        <Icon type={currency} />
      </span>
    )
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country"
  },
  {
    title: "buy price",
    dataIndex: "buy_price",
    key: "buy_price"
  },
  {
    title: "sell price",
    key: "sell_price",
    dataIndex: "sell_price",
    render: sellPrice => (
      <span>
        {sellPrice.map(price => {
          let color = price.length > 5 ? "geekblue" : "green";
          if (price === "up") {
            color = "green";
          } else if (price === "down") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={price}>
              {price.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    currency: "global",
    country: "Poland",
    buy_price: 1.9,
    sell_price: ["up"]
  },
  {
    key: "2",
    currency: "dollar",
    country: "Usa",
    buy_price: 3.2,
    sell_price: ["up"]
  },
  {
    key: "3",
    currency: "euro",
    country: "European-union",
    buy_price: 3.83,
    sell_price: ["down"]
  }
];

const CalculatorComponent = () => (
  <div style={{ height: "auto" }}>
    <Row style={{ paddingTop: "100px" }}>
      <Col span={18} offset={3}>
        <h2>Data</h2>
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
    <Row style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Col span={18} offset={3}>
        <h2>Calculator</h2>
        <CurrencyConverter />
      </Col>
    </Row>
  </div>
);

export default CalculatorComponent;
