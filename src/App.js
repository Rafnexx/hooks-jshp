import React from "react";
import { Router } from "@reach/router";
import { Layout } from "antd";
// import MenuComponent from "./components/Menu/Menu";
import Navigation from "./Navigation/Navigation";
import HomeComponent from "./Content/HomeComponent";
import CalculatorComponent from "./Content/CalculatorComponent";
import NotFound from "./SubComponents/NotFound";
import UserInput from "./Content/UserInput";
import "./styles/main.less";

const { Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <Content>
          <Router>
            <HomeComponent path="/" />
            <UserInput path="user-input" />
            <CalculatorComponent path="calculator" />
            <NotFound default />
          </Router>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by shoulao
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
