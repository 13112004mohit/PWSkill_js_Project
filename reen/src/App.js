import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Pages from './pages/Pages'
import Features from './pages/Features'
import MegaMenu from './pages/MegaMenu'
import Contact from './pages/Contact';
import Errorpg from './pages/Error';
import Footer from './components/Footer'
import GoTop from './components/GoTop';

function App() {
  return (
    <>
       <Navbar />

        <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/protfolio' element={< Portfolio/>} /> 
           <Route path='/Blog' element={<Blog/>} />
           <Route path='/Pages' element={<Pages/>} />
           <Route path='/Features' element={<Features/>} />
           <Route path='/MegaMenu' element={<MegaMenu/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='*' element={<Errorpg/>} />
        </Routes>
        
        <Footer/>
        <GoTop/>
    </>
  );
}

export default App;