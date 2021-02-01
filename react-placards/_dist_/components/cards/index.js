import React from "../../../../_snowpack/pkg/react.js";
import useRefsMeasurements from "../../hooks/useRefsMeasurements.js";
import useTraversingArray from "../../hooks/useTraversingArray.js";
import StyledCardContainer from "../../styles/components/cards/StyledCardContainer.js";
import Card from "./Card.js";
const Cards = ({
  items,
  timing,
  cardStyles,
  stackCardStyles
}) => {
  const {initial, currentArray} = useTraversingArray(items || [], 5, timing);
  const [cardRefs, measurements] = useRefsMeasurements(items?.length || 5);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(StyledCardContainer, {
    initial,
    offsetheight: measurements[currentArray[0]]?.offsetHeight,
    heights: measurements.map((i) => i.offsetHeight),
    rotatingindicies: currentArray,
    cardStyles,
    stackCardStyles
  }, items?.map((item, index) => /* @__PURE__ */ React.createElement(Card, {
    cardRef: cardRefs[index],
    item,
    key: item.id
  }))));
};
export default Cards;
