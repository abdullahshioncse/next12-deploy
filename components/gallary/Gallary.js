import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Import your images (use correct relative paths)

import img1 from '/public/images/gallery/gallary1.png';
import img2 from '/public/images/gallery/gallery2.png';
import img3 from '/public/images/gallery/gallery3.png';

const Gallery = () => { 


  return (
    <div className="container">  
        <div className="row">
            <div className="col-12 py-4 relative">
                <h2 className="pb-2">Designed for the Way You Want to Live</h2>
                <Image 
                    src={img1}
                    style={{
                        width:'100%'
                    }}
                />
                <p>Get excited – building your new home in Melbourne is an adventure we love to share! At Intense Homes, our passion is turning dreams into reality. We offer everything you need to make this journey simple and enjoyable, from the first spark of inspiration to the final handover.</p>
            </div>
            <div className="card-text-inside col-md-6"> 
                <h2 className="pb-2">Smart Start</h2>
                
                <Image 
                    src={img2}
                    style={{
                        width:'100%',
                        height:'400px',
                        'object-fit': 'cover'
                    }}
                />
                <p>At Smart Start Collection, what others call upgrades, we call standard. Our homes are crafted with inclusions that reflect modern style and everyday functionality, so you can enjoy a luxurious lifestyle without paying extra for it. This is how homebuilding should be.</p>
            </div> 
            <div className="card-text-inside col-md-6">
                <h2 className="pb-2">Designer Range</h2>
                <Image 
                    src={img3}
                    style={{
                        width:'100%',
                        height:'400px',
                        'object-fit': 'cover'
                    }}
                />
                <p>Designed with easy living in mind, these homes are thoughtfully appointed with premium features to suit your lifestyle. Stylish facades, master suites and expansive living areas create a sense of space and privacy.</p>
            </div>  
        </div>
    </div>
  );
};

export default Gallery;
