import "./App.css.proxy.js";
import React from "../../_snowpack/pkg/react.js";
import {Placards} from "../react-placards.js";
import {
  configuration,
  configuration2,
  configuration3,
  configuration4
} from "./data.js";
const App = () => /* @__PURE__ */ React.createElement("div", {
  className: "outer-container"
}, /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Placards, {
  ...configuration
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Placards, {
  ...configuration2
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Placards, {
  ...configuration4
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Placards, {
  ...configuration3
}))));
export default App;
