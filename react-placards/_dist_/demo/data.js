import React from "../../../_snowpack/pkg/react.js";
import codepenlogo from "../assets/codepen.svg.proxy.js";
import githublogo from "../assets/github.svg.proxy.js";
import likedinlogo from "../assets/linkedin.svg.proxy.js";
import stackoverflowlogo from "../assets/stackoverflow.svg.proxy.js";
import Content, {ChangingBackground, MediaContent} from "./Content.js";
const containerStyles = {padding: "10% 5%"};
export const configuration = {
  items: [
    {
      id: "content-types",
      content: /* @__PURE__ */ React.createElement(Content, {
        heading: "Content Types",
        date: "12-12-2020",
        description: "You can pass in a string or a component."
      })
    },
    {
      id: "custom-components",
      content: /* @__PURE__ */ React.createElement(Content, {
        heading: "Custom Components",
        date: "13-12-2020",
        description: "You can create your own custom components"
      })
    },
    {
      id: "editing-first-card",
      content: /* @__PURE__ */ React.createElement(Content, {
        heading: "Editing First Card",
        date: "01-04-2021",
        description: "You can format the style of current card."
      })
    },
    {
      id: "text-value",
      content: "You can mix them together!"
    }
  ],
  width: 400,
  height: 400,
  timing: 3e3,
  cardStyles: {
    borderRadius: "4px",
    padding: "20px"
  },
  containerStyles
};
export const configuration2 = {
  items: [
    {
      id: "text-value",
      content: "This"
    },
    {
      id: "text-value-2",
      content: "Example"
    },
    {
      id: "text-value-3",
      content: "Just"
    },
    {
      id: "text-value-4",
      content: "Has"
    },
    {
      id: "text-value-5",
      content: "Texts..."
    },
    {
      id: "text-value-6",
      content: "................................"
    }
  ],
  timing: 1500,
  width: 400,
  height: 400,
  cardStyles: {
    borderRadius: "12px",
    padding: "16px"
  },
  containerStyles
};
export const configuration3 = {
  items: [
    {
      id: "green",
      content: /* @__PURE__ */ React.createElement(ChangingBackground, {
        backgroundColor: "#586ce3",
        description: "You can create your own cards."
      })
    },
    {
      id: "red",
      content: /* @__PURE__ */ React.createElement(ChangingBackground, {
        backgroundColor: "#e66af9",
        description: "Just reset the styles"
      })
    },
    {
      id: "blue",
      content: /* @__PURE__ */ React.createElement(ChangingBackground, {
        backgroundColor: "#cdf778",
        description: "And create your own components"
      })
    },
    {
      id: "yellow",
      content: /* @__PURE__ */ React.createElement(ChangingBackground, {
        backgroundColor: "#ed5555",
        description: "You can add as many components as you wish"
      })
    },
    {
      id: "longer-text",
      content: /* @__PURE__ */ React.createElement(ChangingBackground, {
        backgroundColor: "#f7a978",
        description: "If the text size is longer it will auto adjust. So you can include as big a text as you like as long as you remain inside your defined width and height."
      })
    }
  ],
  width: 400,
  height: 400,
  timing: 5e3,
  cardStyles: {
    borderRadius: "0",
    padding: "0",
    backgroundColor: "none"
  },
  stackCardStyles: {
    secondColor: "#4f4f4f",
    thirdColor: "#2d2d2d"
  },
  containerStyles: {
    padding: "5% 5% 0"
  }
};
export const configuration4 = {
  items: [
    {
      id: "green",
      content: /* @__PURE__ */ React.createElement(MediaContent, {
        imgSrc: codepenlogo,
        description: "Codepen logo"
      })
    },
    {
      id: "red",
      content: /* @__PURE__ */ React.createElement(MediaContent, {
        imgSrc: githublogo,
        description: "Github Logo"
      })
    },
    {
      id: "blue",
      content: /* @__PURE__ */ React.createElement(MediaContent, {
        imgSrc: likedinlogo,
        description: "Linkedin Logo"
      })
    },
    {
      id: "yellow",
      content: /* @__PURE__ */ React.createElement(MediaContent, {
        imgSrc: stackoverflowlogo,
        description: "Stackoverflow logo"
      })
    }
  ],
  width: 400,
  height: 400,
  timing: 3e3,
  cardStyles: {
    borderRadius: "0",
    padding: "0",
    backgroundColor: "none"
  },
  stackCardStyles: {
    secondColor: "#b0521f",
    thirdColor: "#8c4018"
  },
  containerStyles
};
export default configuration;
