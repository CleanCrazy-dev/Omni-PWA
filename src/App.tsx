import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { Routes } from "./Routes";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./main.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
