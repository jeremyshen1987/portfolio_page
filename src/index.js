import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Flex from './Flex';
import Portfolio from './Portfolio';
import ProgressBar from './Progress_Bar';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>


    <BrowserRouter>
          <Routes>

            <Route path='/' element={ 
            <>
            <Flex />
            <ProgressBar />
            <Portfolio />
            </>     
            } />


          </Routes>
    </BrowserRouter>      



  </React.StrictMode>
);

