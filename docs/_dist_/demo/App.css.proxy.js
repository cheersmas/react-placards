// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.outer-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.container {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  height: 100vh;\n  width: 100vw;\n}\n\n.container > div:nth-child(n) {\n  align-items: center;\n  display: flex;\n  height: 50%;\n  justify-content: center;\n  width: 50%;\n}\n\n.container > div:nth-child(2) {\n  background: rgb(39, 108, 228);\n}\n\n.container > div:nth-child(3) {\n  background: rgb(228, 105, 39);\n}\n\n.container > div:nth-child(4) {\n  background: rgb(31, 28, 27);\n}\n\n.heading {\n  padding-bottom: 12px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}