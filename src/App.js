import logo from './logo.svg';
import { Link } from 'react-router-dom';

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './Inventory';
import Home from './Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/inventory' component={Inventory} />
      </Routes>
    </Router>
  );
}

export default App;
