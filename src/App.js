import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './Inventory';
import Home from './Home';
import background from './assets/background.png'
import { Container} from 'react-bootstrap';

function App() {
  return (
    <div class="bg">
      <Router>
        <Header />
        <Routes>
          <Route path="/ReactWFT/inventory" element={<Inventory/>} />
          <Route exact path="/ReactWFT/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
