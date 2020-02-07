import React, { useState } from "react";
import { Input, Button, Icon, Row, Col, Select } from "antd";

const currencyPrice = {
  euro: { pln: 4.15, dollar: 0.83 },
  dollar: { pln: 3.45, euro: 1.2 },
  pln: { dollar: 0.38, euro: 0.25 }
};

const currencySign = {
  euro: "EUR",
  dollar: "USD",
  pln: "PLN"
};

const CurrencySelectMenu = () => {
  const [fromData, setFromData] = useState("--");
  const [toData, setToData] = useState("--");

  //   const handleChangeFrom = e => setFromData(e.target.value);
  const handleChangeFrom = e => setFromData(e);
  const handleChangeTo = e => setToData(e);

  return (
    <div>
      <Select
        defaultValue={fromData}
        value={fromData}
        style={{ width: 120 }}
        onChange={handleChangeFrom}
      >
        <Select.Option key="zeroFrom" value="--">
          --
        </Select.Option>
        {Object.values(currencySign).map(currency => (
          <Select.Option key={currency} value={currency}>
            {currency}
          </Select.Option>
        ))}
      </Select>
      <Select
        defaultValue={toData}
        style={{ width: 120 }}
        value={toData}
        onChange={handleChangeTo}
      >
        <Select.Option key="zeroTo" value="--">
          --
        </Select.Option>
        {Object.values(currencySign).map(currency => (
          <Select.Option key={currency}>{currency}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

const CurrencyConverter = () => {
  const [reverse, setReverse] = useState(false);
  const [currencySet, setCurrencySet] = useState(["euro", "pln"]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const convertCurrency = fromCurr => {
    let resultValue = 0;
    const from = currencySet[0];
    const to = currencySet[1];
    try {
      resultValue = (fromCurr * currencyPrice[from][to]).toFixed(2);
    } catch (err) {
      resultValue = fromCurr * (1 / currencyPrice[to][from]);
    }
    setToCurrency(resultValue);
  };

  // const handleReverseCurrency = () => {
  //   setReverse(!reverse);
  //   // if reverse is true
  // };

  return (
    <div>
      <div
        style={{
          margin: "20px auto"
        }}
      >
        <CurrencySelectMenu />
      </div>
      <Row>
        <Col span={18} offset={6}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Icon
              type={currencySign[currencySet[0]]}
              style={{ marginRight: 15 }}
            />
            <Input
              placeholder={fromCurrency}
              style={{ marginRight: 15 }}
              onChange={e => setFromCurrency(e.target.value)}
              value={fromCurrency}
            />
            <Button
              style={{ marginRight: 15 }}
              onClick={() => setReverse(!reverse)}
            >
              <Icon type="swap" />
            </Button>
            <br />
            <Icon
              type={currencySign[currencySet[1]]}
              style={{ marginRight: 15 }}
            />
            <Input
              placeholder={toCurrency}
              style={{ marginRight: 15 }}
              onChange={e => setToCurrency(e.target.value)}
              value={toCurrency}
            />
            <Button onClick={() => convertCurrency(fromCurrency)}>
              Convert
            </Button>
          </div>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default CurrencyConverter;
