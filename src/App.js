import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Cadastrar from './pages/Cadastrar';
import Clientes from './pages/Clientes';
import Contato from './pages/Contato';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastrar' element={<Cadastrar />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/contact' element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
