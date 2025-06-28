import React from 'react';
import Link from 'next/link';

const HeroVideo = (props) => {
  return (
    <section className={`hero-modern ${props.heroClass || ""}`}>
      <div className="hero-slider">
        <div className="slide">
          <div className="slide-inner position-relative overflow-hidden">

            {/* Background video */}
            <video
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/videos/home-video.mp4" // make sure the video is in public/videos
              style={{ zIndex: -1 }}
            />

            {/* Optional dark overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 0 }}
            ></div>

            {/* Content */}
            <div className="container h-100 d-flex align-items-center">
              <div className="row">
                <div className="col col-lg-7 col-md-10 col-12 slide-content text-white position-relative">
                  <div className="slide-heading">
                    <h1 className="fw-bold display-4" style={{"font-size": "3.5rem",
                    "font-weight": "700",
                    "letter-spacing": "1px",
                    "margin-bottom": "2rem",
                    "margin-top": "-2rem",
                    // top: 0;
                    "line-height": "1.2",
                    "text-transform": "uppercase",
                    "color": "rgba(255, 255, 255, 1) !important",
                    color:"white"}}>
                      WE CRAFT FUTURE<br />DREAM HOME
                    </h1>
                  </div>

                  <p className="lead mb-4" style={{ maxWidth: '1000px', color:"rgba(255,255,255,0.6)" }}>
                    Realtor Vacation stands for exceptional luxury properties and single properties in the most sought-after districts of the city. Turning houses become dreams as your go-to real estate agent. You can rely on us to help you safely home.
                  </p>

                  <Link
                    href="/properties"
                    className="btn  px-4 py-2 rounded-pill" style={{background:"#FF6F30",color:"white"}}
                  >
                    Browse Properties
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
