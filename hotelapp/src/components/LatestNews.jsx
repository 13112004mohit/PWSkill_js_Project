import React from 'react'
import Cart from './newscart'
import '../style/home.css'

import  fimg from '../assets/latestnewsimg1.jpg'
import  simg from '../assets/latestnewsimg2.jpg'
import  timg from '../assets/latestnewsimg3.jpg'
const event1 = 'EVENT'
const event2 = 'INFO'
const event3 = 'ENJOY'
const fheading = 'Learn How To Motivate YourSelf';
const fheading2 = 'What If Let You Run The Hubble';
const fheading3 = 'Tourist Information';
const fnews1 ='How Many free autoresponders have you tried? And how many emails did you get through using them?';
const fnews2 ='My point here is that if you have no clue for the answers above you probably are not operating a followup.';
const fnews3 ='Hotel R K Grand offers accommodation in Varanasi. The property is set 2.5 km from Dasaswamedh Ghat, 3.7 km from Harishchandra Ghat , 3.7 km from Kedar Ghat and 1 km from Varanasi railway Station...';

const LatestNews = () => {
  return (
    <>

    <div className="latestnews_mcon">
       <p className='latest_blog_'>OUT BLOG</p>
       <h1>Latest News & Event</h1>
       <div className="latestnews_cart_flow">
           <Cart event={event1} newsimg={fimg} newsheadline={fheading} content_news={fnews1}/>   
           <Cart event={event2} newsimg={simg} newsheadline={fheading2} content_news={fnews2}/>   
           <Cart event={event3} newsimg={timg} newsheadline={fheading3} content_news={fnews3}/>   
       </div>
    </div>

    </>
  )
}

export default LatestNews