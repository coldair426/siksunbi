import React from 'react';

// 임시db
import infoData from '../public/pseudo-server/pseudo-db.json';
import menuData from '../public/pseudo-server/pseudo-db-menus.json';

// CSS reset
import { Reset } from 'styled-reset';

import './style/Header.css';
import './style/Footer.css';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Siksunbi from './page/Siksunbi';
import Menu from './page/Menu';
import Footer from './component/Footer';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Routes>
        <Route path='/' element={<Siksunbi infoData={infoData} />} />
        <Route path='/deraeun/admin' element={<div>관리자페이지</div>} />
        <Route path='/:id' element={<Menu infoData={infoData} menuData={menuData} />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
