import React, { useState } from "react";
import '../style/video.css'
import VideoModal from "./VideoModal";
import datasV from './datasV'


const VideoGallery  = () => {

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const openModal = (url) => {
    setSelectedVideoIndex(url);
  };

  const closeModal = () => {
    setSelectedVideoIndex(null);
  };



  return (
    <>
      <section className="two_container">
        <div className="first_vdo_con">
                       <p><b> Sort by : </b></p>
                       <p><b> <span>Popular</span> |  New  | Favorites </b></p>
        </div>

        <div className="second_vdo_con">

        {datasV.map((data, index) => (
        <div className="video_" key={index}>
          <button className="vidoplayBTN" onClick={() => openModal(data.video)}>
              {
                   <div className="imgbox">
                     <img src={data.image} alt="" />
                   </div>

              }
          </button>
        </div>
      ))}
      <VideoModal
        videoUrl={selectedVideoIndex}
        isOpen={selectedVideoIndex !== null}
        onClose={closeModal}
      />

        </div>
        
      </section>

    </>
  )
}

export default VideoGallery 