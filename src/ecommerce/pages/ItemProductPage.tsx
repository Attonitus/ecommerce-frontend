import { AppLayout } from "../layout/AppLayout"
import hoddieFront from '/homepage/list/hoddie-red.jpg';
import hoddieBack from '/homepage/list/hoddie-back.jpg';
import Modal from 'react-modal';
import Slider from "react-slick";
import './itemproductpage.css';

import { useState } from "react";

const images = [
    hoddieFront, hoddieBack
  ];
  


export const ItemProductPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return(
        <AppLayout>
            <div className="hero-g alter"  onClick={openModal}>
                <a className="a-img">
                    <img src={hoddieBack} alt="" />
                </a>
            </div>
            <div className="modal-container">
                <Modal
                    isOpen={isModalOpen} 
                    onRequestClose={closeModal} 
                    contentLabel="Carrusel de imágenes"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <button onClick={closeModal} className="close-modal-button">X</button>
                    <Slider {...settings}>
                        {
                            images.map((image, index) => (
                                <div className="carrousel-div" key={index}>
                                    <img className="carrousel-img" src={image} alt={`Image ${index + 1}`} />
                                </div>
                        ))}
                    </Slider>
                </Modal>

            </div>
            <div className="product-info">
                <h5 className="product-title">Red hoddie one piece</h5>
                <span className="product-price">$1260</span>
                <div className="size-list">
                    <button>
                        <span className="nav-icon">
                            S
                        </span>
                    </button>
                    <button>
                        <span className="nav-icon">
                            M
                        </span>
                    </button>
                    <button>
                        <span className="nav-icon">
                            L
                        </span>
                    </button>
                    <button>
                        <span className="nav-icon">
                            XL
                        </span>
                    </button>
                </div>
            </div>
        </AppLayout>
    )
}