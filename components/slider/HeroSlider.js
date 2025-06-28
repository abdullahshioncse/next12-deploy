import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Import your images (use correct relative paths)
import img1 from '/public/images/about/gallary1.png';
import img2 from '/public/images/about/about1.jpg';
import img3 from '/public/images/about/about2.png';
import img4 from '/public/images/about/about3.jpg';
import img5 from '/public/images/about/about4.jpg';
import img6 from '/public/images/about/about5.jpg';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="hero_slider-container container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[70vh]">
            <Image  
            width={400}
            height={1000}
            style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
            }}
              src={img}
              alt={`Slide ${index + 1}`} 
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
      <div style={{
        position:"absolute",
        top: '50%',
        right: "0",
        width: '400px',
        background: '#eee',
        transform: 'translateY(-50%) translateX(50%)',
        padding: "12px 20px"

      }}>
        <h2 style={{fontSize:'24px',
            color: 'orange'
        }}>Designed for the Way You Want to Live</h2>
        <p style={{fontSize:'14px'}}>Get excited – building your new home in Melbourne is an adventure we love to share! At Intense Homes, our passion is turning dreams into reality. We offer everything you need to make this journey simple and enjoyable, from the first spark of inspiration to the final handover.</p>
        <button style={{
            background:'black',
            color:'white',
            padding:'10px 20px'
        }}>Learn More</button>
      </div>
    </div>
  );
};

export default HeroSlider;
