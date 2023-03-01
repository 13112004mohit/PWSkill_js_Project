import React from 'react'
import '../style/about.css'
import '../style/rooms.css'
import { NavLink } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Cart from '../components/Roomcart'
import Calc from '../components/Calc'

import  room1 from '../assets/familyroom1.avif'
import  room2 from '../assets/familyroom2.avif'
import  room3 from '../assets/familyroom3.avif'


const image ={
  backgroundImage:"url('https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
  backgroundPosition:'80% 80%'
}





const Rooms = () => {
  return (
    <div className="About_m_con">
         
         <div className="About_1_con" style={image} >
            <h1>Our Room</h1><br />
            <span id='About_1_con_span'> <NavLink to={'/'}> Home</NavLink><MdOutlineKeyboardArrowRight id='About_1_con_icon'/> Room</span>
         </div>

        <div className="room_2col">
          <div className="room_2_twoCol_grid">
               <div className="room2_firstCol">
                 <Cart rmodel={'delux Room'} rimage={room1} price={3400} rservices={'dinner'} rBed={'2'} rcapacity={'4'} rsize={'400X800'}/>
                 <Cart rmodel={'Club Royal Room'} rimage={room2} price={4000} rservices={'all'} rBed={'2'} rcapacity={'4'} rsize={'400X800'}/>
                 <Cart rmodel={'Family Room Room'} rimage={room3} price={4200} rservices={'night party'} rBed={'2'} rcapacity={'4'} rsize={'400X800'}/>
               </div>
               <div className="room2_SecondCol">
                  <Calc/>
               </div>
                 
          </div>
        </div>
    </div>
  )
}

export default Rooms