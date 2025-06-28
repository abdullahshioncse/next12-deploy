import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Reviews = () => { 
  return (
    <div className="container pt-4">   
        <h2 className="pb-4" style={{textAlign:'center'}}>Trusted by Homeowners Like You</h2>
        <div className="row gx-4 gy-4">
            {/* Review Card */}
            <div className="col-12 col-lg-4"> 
                <div style={{background: '#eee', padding:'20px 20px'}}>
                    <h2 style={{display:'block'}}>Lucky Gill</h2>

                    <div style={{'font-size':'14px'}}>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-2" /></span>

                        <p style={{display:'inline-block'}}>a month ago</p>
                    </div>
                    <p style={{'font-size':'14px', overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '10'}}>Intense Homes has built 2 houses for us . From start till present they were professional, reliable, and attentive to every detail. The team is very friendly, communicative, and always willing to go the extra mile to ensure the my investment house is completed on time and to a high standard. I’m absolutely thrilled with the results so far and will definitely use them again for future work. Thank you for making the process so smooth and we highly recommend them.</p> 
                </div>
                
            </div>  
            {/* Review Card */}
            <div className="col-12 col-lg-4"> 
                <div style={{background: '#eee', padding:'20px 20px'}}>
                    <h2 style={{display:'block'}}>Amitjot kaur</h2>

                    <div style={{'font-size':'14px'}}>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /></span>
                        <span><FontAwesomeIcon icon={faStar} className="text-warning me-2" /></span>

                        <p style={{display:'inline-block'}}>2 days ago</p>
                    </div>
                    <p style={{'font-size':'14px', overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '10'}}>Building my home with Intense Homes was a truly satisfying experience. From the initial consultation to the final handover, their team was professional, responsive, and attentive to detail. They offered excellent design suggestions while respecting my preferences and budget. The construction process was smooth, with regular updates and no unexpected delays. The quality of workmanship and materials exceeded my expectations, and any minor concerns were addressed promptly. I felt genuinely supported throughout the journey, making what could have been a stressful process feel easy and enjoyable. I highly recommend Intense Homes to anyone planning to build their dream home.</p> 
                </div>
                
            </div>  

        </div>
    </div>
  );
};

export default Reviews;
