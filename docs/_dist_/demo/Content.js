import React from "../../_snowpack/pkg/react.js";
const Content = ({heading, date, description}) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
  className: "heading"
}, /* @__PURE__ */ React.createElement("strong", null, heading), " ", /* @__PURE__ */ React.createElement("span", null, date)), /* @__PURE__ */ React.createElement("p", null, description));
export const ChangingBackground = ({
  backgroundColor,
  description
}) => /* @__PURE__ */ React.createElement("div", {
  style: {
    backgroundColor,
    padding: 20
  }
}, /* @__PURE__ */ React.createElement("h2", null, description));
export const MediaContent = ({imgSrc, description}) => /* @__PURE__ */ React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    padding: 12,
    background: "#fff",
    overflow: "hidden"
  }
}, /* @__PURE__ */ React.createElement("img", {
  src: imgSrc,
  alt: description,
  height: "32"
}), /* @__PURE__ */ React.createElement("span", {
  style: {paddingLeft: 12}
}, description));
export default Content;
