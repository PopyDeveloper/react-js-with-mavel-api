import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

require('dotenv').config();

export default function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
  );
}
