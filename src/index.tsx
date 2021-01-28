import React from 'react';
import ReactDOM from 'react-dom';

import App from './components';
import { configuration } from './data/data';

ReactDOM.render(
  <React.StrictMode>
    <App {...configuration} />
  </React.StrictMode>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
