import React,{ useState, useEffect } from 'react'
import {HiBars3} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'
import '../style/animatedbutton.css'
import {MdPhoneAndroid,MdOutlineEmail} from 'react-icons/md'
import {FaFacebookF,FaTwitter,FaPinterestP} from 'react-icons/fa'
import {IoLogoGoogleplus} from 'react-icons/io'
import {CgWebsite} from 'react-icons/cg'




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
             <span><MdOutlineEmail id='smallinfo_icon'/> <a  href="mailto:info@shrishaktimayi.com">info@shrishaktimayi.com</a></span>
             <span><MdPhoneAndroid id='smallinfo_icon'/><a href="tel:+ 8726274444"> 8726274444</a></span>
          
           </div>
           <div className="socallogo_sh">
              <div class="animated-button facebook">
                    <span><a href=""><FaFacebookF className='animated_icon'/></a></span>
              </div>
              <div class="animated-button google">
                    <span><a href=""><IoLogoGoogleplus className='animated_icon'/></a></span>
              </div>
              <div class="animated-button twitter" >
                    <span><a href=""><FaTwitter className='animated_icon'/></a></span>
              </div>
              <div class="animated-button pinterest">
                    <span><a href=""><FaPinterestP className='animated_icon'/></a></span>
              </div>
              <div class="animated-button behance">
                    <span><a href="https://shrishaktimayi.com/" target={'_blank'}><CgWebsite className='animated_icon'/></a></span>
              </div>
  
           </div>
        </div>
        {/* header secion */}
         <section  className={scroll ? 'navcontainer_AS' : 'navcontainer_BS'} id='nav_m_container'>
            <div className={scroll ? 'navlogo_AS' : 'navlogo_BS'} id='nav_logo' >
                <NavLink to={'/'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}}>
                        <h2 id='logo'>श्री शक्तिमयी आयुर्वेदिक फार्मेसी एवं नर्सिंग कॉलेज</h2>
                </NavLink>
            </div>

           
            <div id="nav_twoCol">

                <ul id='nav_ul'>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'} >HOME</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'} >About</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/courses'} >Courses</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/gallery'} >Gallery</NavLink></li>
                    <li><NavLink  className={scroll ? 'nav_a_AS' : 'nav_a_BS'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>CONTACT</NavLink></li>
                </ul>


                <RxCross1 id='removemenu' onClick={menuclose} />

            </div>

            <HiBars3 id='addmenu' onClick={menushow} />

          

         </section>

    </>
  )
}

export default Navbar