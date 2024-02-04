import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import FeaturedModels from 'pages/Featured';

import reduxStore from './store';
import MarketPlace from './pages/MarketPlace';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', theme);
  })

  return (
    <Fragment>
      <BrowserRouter>
        <Provider store={reduxStore}>
          <Routes>
            <Route path='/featured' element={<FeaturedModels />} />
            <Route path='/' element={<MarketPlace />} />
          </Routes>
          <ToastContainer autoClose={4000} />
        </Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
