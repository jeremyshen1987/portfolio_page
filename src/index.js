import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Flex from './Flex';
import Portfolio from './Portfolio';
import Resume from './Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));

//router not in use

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={ 
        <>
        <Flex />
        <Portfolio />
        </>     
        } />
        <Route path='/resume' element={<Resume />} />


      </Routes>
    </BrowserRouter>   
 



  </React.StrictMode>
);

