import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#courses" element={<Courses />} />
            <Route path="/#team" element={<Team />} />
            <Route path="/#gallery" element={<Gallery/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer />
          <GoTop/>
        </Router>
    </>
  );
}

export default App;

