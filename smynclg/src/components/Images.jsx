import React, { useState } from 'react'
import '../style/ImageModal.css';
import '../style/Images.css'
import DataV from '../components/DataV'
import {FcNext,FcPrevious} from 'react-icons/fc'
import {RxCross1} from 'react-icons/rx'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const Images = () => {

  const [data, setData] = useState({img:'',i:0});
  const openModal = (img,i)=>{
    setData({img,i})
  }

  const imgAction =(action)=>{
    let i= data.i;
    if(action === 'next-img'){
      setData({img:DataV[i + 1].image , i:i+1})
    }
    if(action === 'previous-img'){
      setData({img:DataV[i - 1].image , i:i-1})
    }
    if(!action){
      setData({img:'',i:0})
    }
  } 

  return (
    <>
     {
      data.img && 
      <div className="modal-overlay" >
      <div className="modal">
        <img src={data.img} onClick={()=>imgAction()} alt="modal_image" />
        <button className="modal-close" onClick={()=>imgAction()}><RxCross1/></button>
        <button className="modal-prev" onClick={()=>imgAction('previous-img')}><FcPrevious/></button>
        <button className="modal-next" onClick={()=>imgAction('next-img')}><FcNext/></button>
      </div>
    </div>
     }

     <div id='gallery_m_con'>
      <ResponsiveMasonry  columnsCountBreakPoints={{554: 2, 750: 3, 900: 5}} >
                   <Masonry gutter='15px'>
         {DataV.map((data, i) => (
            <img  onClick={() => openModal(data.image,i)}  src={data.image}  alt="img_" />
         ))}
      
        </Masonry>
        </ResponsiveMasonry>

    </div> 
    </>
  )
}

export default Images

