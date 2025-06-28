import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/Finallogowhite.png'
import ft1 from '/public/images/footer/img-1.jpg'
import ft2 from '/public/images/footer/img-2.jpg'
import Image from 'next/image'
import Destinations from '../../api/destination'


const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <>
        {/* Prefooter */}
        <div className="d-flex justify-content-center align-items-center gap-3 pb-4">
  <p class="mb-0 fw-bold text-dark">
  Turn Dreams Into Addresses – Start with <span class="bg-warning px-1 rounded">Intense Homes</span> Today
</p>

  <Link 
    href="/contact" 
    className="btn btn-warning btn-sm rounded-pill fw-semibold shadow-sm"
  >
    Enquire
  </Link>
</div>


        {/* footer */}
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="wpo-footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid">
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    {/* <p>online store with lots of cool and exclusive features</p> */}
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi ti-location-pin"></i>brighton rise maddingley vic 3340</li>
                                            <li><i className="fi ti-mobile"></i>+04 333-278-71</li>
                                            <li><i className="fi flaticon-email"></i>Admins@intensehomes.com.au</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget resource-widget">
                                    <div className="widget-title">
                                        <h3>Destination</h3>
                                    </div>
                                    {Destinations.slice(0, 2).map((destination, ditem) => (
                                        <div className="news-wrap" key={ditem}>
                                            <div className="news-img">
                                                <Image src={destination.dSimg} alt="" />
                                            </div>
                                            <div className="news-text">
                                                <h3><Link onClick={ClickHandler} href="/destination-single/[slug]" as={`/destination-single/${destination.slug}`}>{destination.title}</Link></h3>
                                                <span>{destination.date}</span>
                                                <h2>${destination.price}</h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12" style={{'margin-left':'auto'}}>
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                        <li><Link onClick={ClickHandler} href="/room">Our Offers</Link></li>
                                        <li><Link onClick={ClickHandler} href="/service">How Spread</Link></li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                        {/* <li><Link onClick={ClickHandler} href="/service-single">Our Event</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget newsletter-widget">
                                    <div className="widget-title">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <form onSubmit={SubmitHandler}>
                                        <div className="input-1">
                                            <input type="email" className="form-control" placeholder="Email Address *" required="" />
                                        </div>
                                        <div className="submit clearfix">
                                            <button type="submit" style={{ }} >subscribe
                                                <i className="ti-angle-right" style={{ color: '#ffffff', backgroundColor: '#ff6f30' }} ></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className="term">
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Privecy Policy</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Terms & Condition</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Cookies</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12">
                            <p className="copyright">&copy; Powerd by Synapze. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
        
    )
}

export default Footer;