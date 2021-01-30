import React from 'react';
import ReactDOM from 'react-dom';

import { configuration } from './demo/data';
import { Banners } from './react-banners';

ReactDOM.render(
  <React.StrictMode>
    <Banners {...configuration} />
  </React.StrictMode>,
  document.getElementById('root')
);
