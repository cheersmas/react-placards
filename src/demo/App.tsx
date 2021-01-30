import './App.css';

import type { FC } from 'react';
import React from 'react';

import { Placards } from '../react-placards';
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
        <Placards {...configuration} />
      </div>
      <div>
        <Placards {...configuration2} />
      </div>
      <div>
        <Placards {...configuration4} />
      </div>
      <div>
        <Placards {...configuration3} />
      </div>
    </div>
  </div>
);

export default App;
//
