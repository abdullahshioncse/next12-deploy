import Image from 'next/image';
import myImage from '../../public/images/about/building_with_us_1.jpg';
import myImage2 from '../../public/images/about/building_with_us_2.jpg';

const BuildingWithUsComponent = () => {
  return (
    <>
    <div className="building-with-us">
      <div className="left">
        <h2>Experience the Difference with Intense Homes</h2>
        <p>
          At Intense Homes, we’re committed to transforming the way Australians build and live. 
          By combining innovative design, superior craftsmanship, and personalised service, 
          we deliver homes that are as functional as they are beautiful.
        </p>
        <p>
          Our philosophy, “Built with Purpose, Designed for Life,” reflects our passion for 
          creating spaces that inspire, uplift, and exceed expectations at every stage of the journey.
        </p>
      </div>
      <div className="right">
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <Image 
            src={myImage} 
            alt="Building With Us"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
    <div className="building-with-us"> 
      <div className="left">
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <Image 
            src={myImage2} 
            alt="Building With Us"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="right"> 
        <p>
         For more than 15 years, Intense Homes has proudly transformed the residential landscape of Victoria by prioritizing quality, innovation, and a client-focused approach.
        </p>
        <p>
          Our success is grounded in extensive experience, meticulous workmanship, and a genuine understanding of what turns a house into a home.
        </p>
      </div>
    </div>
    </>
    
  );
};

export default BuildingWithUsComponent;
