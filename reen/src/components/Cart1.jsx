import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {GoLightBulb} from 'react-icons/go'
import {BiStar} from 'react-icons/bi'


import '../style/home.css'




const Cart1 = () => {
  return (
    <>
       <section className="Cart1_con">
        {/* first row */}
         <div  className="first_con">
            <h1 data-aos="fade-up"  data-aos-duration="800" className="first_h1">Want to work with us?</h1>
            <p data-aos="fade-up"  data-aos-duration="800" className="first_p">Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam.</p>
            <div className="btn-ra">
                    <button className="btn "> GET IN TOUCH </button>
            </div>

         </div>
        
       </section>
    </>
  )
}

export default Cart1;