import React from 'react';
import ReactDOM from 'react-dom';

import { Banners } from './components';
import { configuration } from './data/data';

ReactDOM.render(
  <React.StrictMode>
    <Banners {...configuration} />
  </React.StrictMode>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
