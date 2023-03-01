import React from 'react'
import '../style/about.css'
import { NavLink } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

import hotel_img2 from '../assets/foodLover.jpg';

const image ={
  backgroundImage:"url('https://images.unsplash.com/photo-1433155805822-ffc337821a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8MjA3ODU0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
}

const FoodLover = () => {
  return (
    <div className="About_m_con">
         
    <div className="About_1_con" style={image} >
       <h1>DINING & RESTAURANT</h1><br />
       <span id='About_1_con_span'> <NavLink to={'/'}> Home</NavLink><MdOutlineKeyboardArrowRight id='About_1_con_icon'/> About Us</span>
    </div>

    <div className="About_2_con">
     <div className="About_2_col_2main">
     <h1 className='About_h1'>Food Lover - A Multicuisine Restaurant</h1>
       <div className="About_img_con">
           <img src={hotel_img2} alt="" className="About_img_size" />
       </div>
       <p className="About_p">
       “In a land of so many diverse people, there is one passion that binds a billion people together – food! “ Naturally, The Food Lover serves up a range of dining experiences tries to recreate the Indian passion for food, both Indian and international. For the way to a guest’s heart is also through the stomach. The speciality restaurant, one of the largest and undoubtedly the best in town, is known for its exquisite decor and choicest cuisine. Here one can actually savour the delicacies. <br /><br />
       Food Lover that is designed especially for those who always like to be on top, literally. Give it a glance. It’s bound to meet your approval. Food Lover offers streamlined service and an atmosphere that reflects R K Hotels’ unique take on dining. The restaurant have an uncomplicated menu that caters for all tastes. Food Lover restro delivers a relaxed dining experience. Food Lover offers a relaxing mood and great service. Sink into the lounges while enjoying a comfortable caprioska . If you are looking to make an impression with friends or clients, the Food Lover offers contemporary areas offering an intimate alternative for a private dinner or cocktail function. <br /><br />
       Food Lover attracts laid-back brunches and lingering launchers. You’ll warm to the helpful service, refreshing menu and spirited atmosphere. Food Lover serves up simple and tasty breakfasts, an array of all-day dining treats and outstanding options from the dinner menu. At Food Lover Restaurant , we understand that eating goes hand-in-hand with hospitality, friendship and conversation .Food Lover promotes the best of food flavours, maintaining the freshness and quality of our produce to provide a truly dining experience. <br /><br />
       Allow yourself to indulge and unravel the mystery and the magic of this new art of dining in its purest form as you raise a champagne toast to this unique journey in the company of a group of friends or with someone special. The décor is elegantly finished, astute, original and sophisticated. Chic, contemporary yet minimalist, This fine dining restaurant uses a blend of natural colors, materials and details.. Refined minimalism and pristine intimacy define the Food Lover experience – an ideal setting for a private gathering of guests, a perfect meeting room for a high-powered business lunch or a cozy evening meal. <br /><br />
       </p>
        <hr />
        <p>Share: <BsFacebook id='socalicon'/> 
                               <BsInstagram id='socalicon'/>
                                <BsTwitter id='socalicon'/>
                                <BsLinkedin id='socalicon'/></p>
     </div>
   </div> 
</div>
  )
}

export default FoodLover