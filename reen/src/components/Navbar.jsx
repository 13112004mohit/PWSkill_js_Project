import React,{ useState, useEffect } from 'react'
import {HiBars3} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'
import '../style/animatedbutton.css'
import {MdPhoneAndroid,MdOutlineEmail} from 'react-icons/md'
import {FaFacebookF,FaTwitter,FaDribbble,FaPinterestP,FaBehance} from 'react-icons/fa'
import {IoLogoGoogleplus} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import logo from '../assets/logo.png'


const Navbar = () => {

  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
        if ((window.scrollY > 0) ) {
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
    {/* small info header */}
        <div className="smalinfo_sh">
           <div className="emlphone_sh">
             <span><MdOutlineEmail id='smallinfo_icon'/> <a href="mailto:info@reen.com">info@reen.com</a></span>
             <span><MdPhoneAndroid id='smallinfo_icon'/><a href="tel:+ +00(123)4567890"> +00 (123) 456 78 90</a></span>
          
           </div>
           <div className="socallogo_sh">
              <div class="animated-button facebook">
                    <span><FaFacebookF className='animated_icon'/></span>
              </div>
              <div class="animated-button google">
                    <span><IoLogoGoogleplus className='animated_icon'/></span>
              </div>
              <div class="animated-button twitter" >
                    <span><FaTwitter className='animated_icon'/></span>
              </div>
              <div class="animated-button pinterest">
                    <span><FaPinterestP className='animated_icon'/></span>
              </div>
              <div class="animated-button behance">
                    <span><FaBehance className='animated_icon'/></span>
              </div>
              <div class="animated-button dribbble">
                    <span><FaDribbble className='animated_icon'/></span>
              </div>
  
           </div>
        </div>
        {/* header secion */}
         <section  className={scroll ? 'navcontainer_AS' : 'navcontainer_BS'} id='nav_m_container'>
            <div className={scroll ? 'navlogo_AS' : 'navlogo_BS'} id='nav_logo' >
                <NavLink to={'/'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}}>
                        <img className='navbar_logo' src={logo} alt="" />
                </NavLink>
            </div>

           
            <div id="nav_twoCol">

                <ul id='nav_ul'>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'} >HOME</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/protfolio'} >PROTFOLIO</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/Blog'} >BLOG</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/Pages'} >PAGES</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/Features'} >FEATURES</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/MegaMenu'} >MEGA MENU</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>CONTACT</NavLink></li>
                </ul>


                <RxCross1 id='removemenu' onClick={menuclose} />

                <div className="searchbox_container">
                  <div class="searchBox">
                          <input type="search" name="search" id="searchTxt" class="searchText" placeholder="type to search.." />
                          <a href="#" class="search-icon"><BsSearch/></a>
                  </div>
                 </div>
            </div>

            <HiBars3 id='addmenu' onClick={menushow} />

          

         </section>

    </>
  )
}

export default Navbar