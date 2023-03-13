import React from 'react'
import '../style/specialdish.css'

import spe_img from '../assets/p1-removebg-preview.png'


const Speciality = () => {
  return (
    <>
      <section className="spe_m_con">
         <div className="spe_content">
             <h3>Our Special Dish</h3>
             <h2>Rice Pudding</h2>
             <p>Rice pudding is a dish made from rice mixed with water or milk and other ingredients such as cinnamon, vanilla and raisins. Variants are used for either desserts or dinners. When used as a dessert, it is commonly combined with a sweetener such as sugar. You've got to love that it's made from simple ingredients like rice, milk, sugar and eggs. While this is a dessert, it does offer some nutritional benefits, including almost 10 grams of protein and 15 percent of the daily recommendation for bone-building calcium per cup.</p>
         </div>
         <div className="spe_imge_con">
             <img className='image' src={spe_img} alt="" />
         </div>
      </section>
    </>
  )
}

export default Speciality