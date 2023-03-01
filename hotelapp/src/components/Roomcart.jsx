import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import  room1 from '../assets/familyroom1.avif'
import '../style/cartroom.css'

const Roomcart = (props) => {
  return (
    <>
      <div className="cart_m_con">
         <div className="cart_image_con">
             <img id='cart_image_size' src={props.rimage} alt="" />
         </div>
         <div className="cart_data_con">
             <h1>{props.rmodel}</h1>
             <h2>{props.price} INR<span>/Day</span></h2>
             <div className="cart_category_grid_two_col">
                 <p>Size: <br /> <span>{props.rsize}</span></p>
                 <p>Capacity: <br /> <span>{props.rcapacity}</span></p>
                 <p>Bed: <br /> <span>{props.rBed}</span></p>
                 <p>Services: <br /> <span>{props.rservices}</span></p>
             </div>
             <p>View Details <FaLongArrowAltRight id='cart_arrow_icon'/> </p>
         </div>
      </div>
    </>
  )
}

export default Roomcart