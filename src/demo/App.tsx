import './App.css';

import type { FC } from 'react';
import React from 'react';

import { Banners } from '../react-banners';
import {
  configuration,
  configuration2,
  configuration3,
  configuration4
} from './data';

const App: FC = () => (
  <div className="outer-container">
    <div className="container">
      <div>
        <Banners {...configuration} />
      </div>
      <div>
        <Banners {...configuration2} />
      </div>
      <div>
        <Banners {...configuration4} />
      </div>
      <div>
        <Banners {...configuration3} />
      </div>
    </div>
  </div>
);

export default App;
//
