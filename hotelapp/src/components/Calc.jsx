import React from 'react'
import '../style/calc.css'

const Calc = () => {
  return (
    <>
       <div className="calc_main_con">
         <h3>Date</h3>
         <div className="twogrid">
                <label htmlFor="checkin">Check In</label>
                <label htmlFor="checkout">Check Out</label>
                <input type="date" name="check" id="checkin" placeholder='Check In' />
                <input type="date" name="check" id="checkout" placeholder='Check Out' />
         </div>
         <h3>Guests</h3>
         <div className="twogrid">
                 <select name="Adults" id="calc_sel_1">
                        <option value="Adults">Adults</option>
                        <option value="Adults">01</option>
                        <option value="Adults">02</option>
                        <option value="Adults">03</option>
                        <option value="Adults">04</option>
                        <option value="Adults">05</option>
                 </select>
                 <select name="Adults" id="calc_sel_1">
                        <option value="Adults">Children</option>
                        <option value="Adults">01</option>
                        <option value="Adults">02</option>
                        <option value="Adults">03</option>
                        <option value="Adults">04</option>
                        <option value="Adults">05</option>
                 </select>
         </div>
         <div>
                <p id='maxminrange'>Max Price:$ 0-4500</p>
                <input  type="range" id="points" name="points" min="0" max="10"/>
         </div>
           <button className="calc_btn">Check Abliable</button>
       </div>
    </>
  )
}

export default Calc