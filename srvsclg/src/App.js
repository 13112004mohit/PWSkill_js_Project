import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import AboutPage from './pages/About';
import Courses from './pages/Courses'
import Staff from './pages/Staff'
import Gallery from './pages/Gallery'
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
           <Route path='/about' element={< AboutPage/>} />
           <Route path='/courses' element={<Courses/>} />
           <Route path='/staff' element={<Staff/>} />
           <Route path='/gallery' element={<Gallery/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='*' element={<Errorpg/>} />
        </Routes>
        
        <Footer/>
        {/* <GoTop/> */}
    </>
  );
}

export default App;
