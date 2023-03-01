import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import AboutPage from './pages/About';
import FoodLover from './pages/FoodLover';
import Rooms from './pages/Rooms'
import Contact from './pages/Contact';
import Login from './pages/Login';
import Errorpg from './pages/Error';
import GoTop from './components/GoTop';
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />

       <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={< AboutPage/>} />
          <Route path='/foodl' element={<FoodLover/>} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<Errorpg/>} />
       </Routes>
       
       <Footer/>
       <GoTop/>

    </>
  );
}

export default App;
