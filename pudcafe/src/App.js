import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import AboutPage from './pages/About';
import Speciality from './pages/Speciality'
import Ourmenu from './pages/Ourmenu'
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
           <Route path='/#about' element={< AboutPage/>} />
           <Route path='/#speciality' element={<Speciality/>} />
           <Route path='/#ourmenu' element={<Ourmenu/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='*' element={<Errorpg/>} />
        </Routes>
        
        <Footer/>
        <GoTop/>
    </>
  );
}

export default App;