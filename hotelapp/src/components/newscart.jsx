import React from 'react'
import '../style/newscart.css'
import {HiArrowLongRight} from 'react-icons/hi2'

const newscart = (props) => {
  return (
    <>
    <div className="newscart_m_con">
        <div className="newscart_first_img_con">
                <img src={props.newsimg} alt="" />
        </div>
        <div className="newscart_second_content_con">
                <p className='newscart_date'><span> Jan 02,2019</span>  <span className='news_event'>{props.event}</span></p>
                <h3 className='newsheadline'>{props.newsheadline}</h3>
                <p className='newscontent'>{props.content_news.slice(0,90)}...</p> <br />
                <HiArrowLongRight className='arrow_icons'/>
        </div>
    </div>
        
    </>
  )
}

export default newscart