import React from "react";
import "./styles/main.scss";

import Form from "./components/form/Form";
import CustomHook from "./components/custom/CustomHooks";
import {
  LifeContainer,
  LifeCycleMethod
} from "./components/effects/LifeCycleMethod";

function App() {
  return (
    <div className="App">
      <div className="container">
        <LifeContainer />
        <LifeCycleMethod />
        <Form />
        <CustomHook />
      </div>
    </div>
  );
}

export default App;
