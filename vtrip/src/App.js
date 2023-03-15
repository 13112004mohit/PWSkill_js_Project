import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import Message from './pages/Message';
import Friends from './pages/Friends';
import Errorpg from './pages/Error';
import Footer from './components/Footer'

function App() {
  return (
    <>
       <Navbar />

        <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/message' element={<Message/>} />
           <Route path='/friends' element={<Friends/>} />
           <Route path='*' element={<Errorpg/>} />
        </Routes>
        
        <Footer/>
    </>
  );
}

export default App;
