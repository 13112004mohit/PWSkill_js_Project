import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoLogIn} from 'react-icons/io5'
import {FiSearch} from 'react-icons/fi'
import {HiBars3} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'

import logo from '../assets/rk_grand_logo.jpg'


const Navbar = () => {

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
        
         <section className="nav_m_container">
            <div className="nav_logo">
                <NavLink to={'/'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}}>
                        <img className='navbar_logo' src={logo} alt="" />
                </NavLink>
            </div>

           
            <div id="nav_twoCol">

                <div className="nav_serach">
                  <input className='nav_serach_box' placeholder='Find your hotel...' type="search" name='search' />
                  <FiSearch className='nav_serach_icon'/>
                </div>

                <ul className="nav_ul">
                    <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'} >Home</NavLink></li>
                    <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'}>About</NavLink></li>
                    <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/foodl'}>FoodLover</NavLink></li>
                    <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/rooms'}>Rooms</NavLink></li>
                    <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>Contact</NavLink></li>
                </ul>

                <NavLink to={'/login'} className='nav_login_container'>
                  <IoLogIn className='nav_login'/>
                  <span className='nav_login_name'>login</span>
                </NavLink>

                <RxCross1 id='removemenu' onClick={menuclose} />
            </div>

            <HiBars3 id='addmenu' onClick={menushow} />

         </section>

    </>
  )
}

export default Navbar