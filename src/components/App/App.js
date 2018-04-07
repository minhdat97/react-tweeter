import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/';
import Main from '../Main';
import withAuthentication from '../HOC/withAuthentication';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default withAuthentication(App);
