import React from "../../../../_snowpack/pkg/react.js";
const Card = ({cardRef, item: {id, content}}) => /* @__PURE__ */ React.createElement("li", {
  key: id,
  ref: cardRef
}, /* @__PURE__ */ React.createElement("section", null, content));
export default Card;
