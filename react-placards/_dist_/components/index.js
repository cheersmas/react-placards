import React from "../../../_snowpack/pkg/react.js";
import useGenerateArray from "../hooks/useGenerateArray.js";
import Cards from "./cards/index.js";
function ReactNotification({
  height = 200,
  width = 200,
  items,
  containerStyles,
  ...rest
}) {
  const newItems = useGenerateArray(items, 5);
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      height,
      width,
      overflow: "hidden",
      boxSizing: "border-box",
      padding: 20,
      ...containerStyles
    }
  }, /* @__PURE__ */ React.createElement(Cards, {
    ...{items: newItems, ...rest}
  }));
}
export default ReactNotification;
