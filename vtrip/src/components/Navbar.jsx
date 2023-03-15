import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/navbar.css'


const Header = () => {
 
  const menushow=()=>{
        const searchBtn = document.querySelector(".search-icon");
        const items = document.querySelector(".nav-items");
        const menuBtn = document.querySelector(".menu-icon span");
        const cancelBtn = document.querySelector(".cancel-icon");
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
        cancelBtn.setAttribute('style','padding-left:20px; transition:all 3s ease;');
        cancelBtn.style.color = "#ff3d00";
  }

 const menuclose=()=>{
     const searchBtn = document.querySelector(".search-icon");
     const items = document.querySelector(".nav-items");
     const menuBtn = document.querySelector(".menu-icon span");
     const cancelBtn = document.querySelector(".cancel-icon");
     items.classList.remove("active");
     menuBtn.classList.remove("hide");
     searchBtn.classList.remove("hide");
     cancelBtn.classList.remove("show");    
 } 

  return (
    <>
    
    
    <nav>
        {/* <!-- hambergar menu --> */}
          <div onClick={menushow} class="menu-icon"><span class="fas  fa-bars"></span></div>       
          {/* <!-- logo of webside  Cancel button--> */}
          <div class="logo">
             <NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>VTrip</NavLink>
          </div>
          <div  onClick={menuclose} class="cancel-icon"><span class="fas fa-times"></span></div>
          {/* <!-- navigation bar items --> */}
          <div class="nav-items">
            <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Explore</NavLink></li>
            <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/message'}>Message</NavLink></li>
            <li><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/friends'}>Friends</NavLink></li>
          </div>
          
          {/* <!-- search and cancel buttons --> */}
         
            {/* <!-- Search menu  --> */}
             <div class="searchBox">
                    <input type="search" name="search" id="searchTxt" class="searchText" placeholder="type to search.." />
                    <a href="#" class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></a>
            </div>
            <div className="user_icon">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&usqp=CAU" alt="" />
            </div>
      </nav>
    
    </>
  )
}

export default Header