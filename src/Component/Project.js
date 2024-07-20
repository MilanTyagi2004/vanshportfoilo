import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './VideoCarousel.css';
import "../Style/project.css"

const Project = ({ videos }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
    return (
        <div className="carousel-container">
            <div className="link-container">
          <p>short Edit Videos</p>
        </div>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} onClick={() => openModal(video)}>
              <video
                width="100%"
                height="300"
                src={video.src}
                controls
                onClick={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
                className="carousel-video"
              />
            </div>
          ))}
        </Slider>
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Selected Video"
          className="modal"
          overlayClassName="overlay"
        >
          {selectedVideo && (
            <div>
              <h2>{selectedVideo.title}</h2>
              <video width="100%" height="400" src={selectedVideo.src} controls autoPlay />
              <button onClick={closeModal}>Close</button>
            </div>
          )}
        </Modal>
      </div>
    );
  };
  
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      &#10095;
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      &#10094;
    </div>
  );

export default Project;
