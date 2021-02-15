import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Graphics from './pages/Graphics';
import Maps from './pages/Maps';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={Graphics} path='/graphics' />
      <Route component={Maps} path='/maps' />
    </BrowserRouter>
  );
};

export default Routes;
