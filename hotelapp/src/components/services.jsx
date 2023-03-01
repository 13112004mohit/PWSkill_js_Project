import React from 'react'
import '../style/home.css'

import cartimg1 from '../assets/homeicon-1.png'
import cartimg2 from '../assets/homeicon-2.png'
import cartimg3 from '../assets/homeicon-3.png'

const services = () => {
  return (
        <div className="services_m_c">
                <div className="services_carts">
                        <img className='services_img' src={cartimg1} alt="" />
                        <p className='services_names'>Transportion</p>
                </div>
                <div className="services_carts">
                        <img className='services_img' src={cartimg2} alt="" />
                        <p className='services_names'>Spa Relaxtion</p>
                </div>
                <div className="services_carts">
                        <img className='services_img' src={cartimg3} alt="" />
                        <p className='services_names'>Restaurant</p>
                </div>
        </div>
  )
}

export default services