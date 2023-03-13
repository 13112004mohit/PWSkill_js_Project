import React,{ useState, useEffect } from 'react'
import {HiBars3} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import '../style/Navbar.css'

import logo from '../assets/logo.png'


const Navbar = () => {

  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

 const menushow=()=>{
    const nav = document.getElementById('nav_twoCol');
    const addmenu = document.getElementById('addmenu')
    const removemenu = document.getElementById('removemenu')
    nav.classList.add('active');
    addmenu.classList.add('active')
    removemenu.classList.add('active')
  }

 const menuclose=()=>{
     const navcls = document.getElementById('nav_twoCol')
     const addmenu = document.getElementById('addmenu')
     const removemenu = document.getElementById('removemenu')
     navcls.classList.remove('active')
     addmenu.classList.remove('active')
     removemenu.classList.remove('active')
 } 

  return (
    <>
        
         <section  className={scroll ? 'navcontainer_AS' : 'navcontainer_BS'} id='nav_m_container'>
            <div id='nav_logo' >
                <NavLink to={'/'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}}>
                        <img className='navbar_logo' src={logo} alt="" />
                </NavLink>
            </div>

           
            <div id="nav_twoCol">

                <ul id='nav_ul'>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} smooth onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'} >Home</NavLink></li>
                    <li><HashLink   className={scroll ? 'nav_a_AS' : 'nav_a_BS'} smooth to={'/#about'}>About</HashLink></li>
                    <li><HashLink   className={scroll ? 'nav_a_AS' : 'nav_a_BS'} smooth to={'/#speciality'}>Our Speciality</HashLink></li>
                    <li><HashLink   className={scroll ? 'nav_a_AS' : 'nav_a_BS'} smooth to={'/#ourmenu'}>Our Menu</HashLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>Contact</NavLink></li>
                </ul>


                <RxCross1 id='removemenu' onClick={menuclose} />
            </div>

            <HiBars3 id='addmenu' onClick={menushow} />

         </section>

    </>
  )
}

export default Navbar