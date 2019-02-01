import React, { Component } from 'react';
import SliderHomeHardun from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

class SliderHome extends Component {
  render() {
    const s_banner = {
      slidesPerView: 2,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      spaceBetween: 5,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      containerClass: 'swiper-container home-banner-slider' // Replace swiper-container with customized-swiper-container
    }

    return(
      <section react-section="sliderHome">
	      <div className="container mt-4 container-slide">
	        <SliderHomeHardun {...s_banner}>
            <a href=""><img className="img-fluid img-slide" src="https://s3.bukalapak.com/uploads/flash_banner/86253/homepage_banner/s-834-352/Banner_A-B_Test_-_3.jpg.webp"/></a>
            <a href=""><img className="img-fluid img-slide" src="https://s0.bukalapak.com/uploads/flash_banner/09053/homepage_banner/s-834-352/Banner_A-B_Test_-_3.jpg.webp"/></a>
            <a href=""><img className="img-fluid img-slide" src="https://s0.bukalapak.com/uploads/flash_banner/07943/homepage_banner/s-834-352/Banner_A-B_Test_-_3.jpg.webp"/></a>
            <a href=""><img className="img-fluid img-slide" src="https://s3.bukalapak.com/uploads/flash_banner/80353/homepage_banner/s-834-352/Banner_A-B_Test.jpg.webp"/></a>
            <a href=""><img className="img-fluid img-slide" src="https://s3.bukalapak.com/uploads/flash_banner/83253/homepage_banner/s-834-352/Banner_A-B_Test_-_Woro_Woro.jpg.webp"/></a>
          </SliderHomeHardun>
	      </div>
      </section>
    )
  }
}

export default SliderHome;