import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Videos from './components/Videos';
import Login from './components/Login';
import Signup from './components/Signup';
import GoTop from './components/GoTop';

function App() {
  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
          <GoTop/>
        </Router>
    </>
  );
}

export default App;

