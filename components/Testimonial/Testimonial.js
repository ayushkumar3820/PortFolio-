import React, { useState } from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    id: '01',
    tImg: '/images/testimonial/img-1.jpg',
    tTitle: 'Portfolio Automation Project',
    Des: "Created an interactive portfolio system using Next.js and Node.js with automated data updates and API-driven content rendering for a dynamic experience.",
    Title: 'Ayush Kumar',
    Sub: 'React & Next.js Developer',
  },
  {
    id: '02',
    tImg: '/images/testimonial/img-4.jpg',
    tTitle: 'Machine Learning Model Integration',
    Des: "Developed scalable ML models integrated into React dashboards for real-time insights. Leveraged TensorFlow and FastAPI for efficient data flow.",
    Title: 'Ayush Kumar',
    Sub: 'Python & ML Developer',
  },
  {
    id: '03',
    tImg: '/images/testimonial/img-5.jpg',
    tTitle: 'AI-Powered Automation Tool',
    Des: "Built a data automation pipeline using Python and MongoDB for structured analytics and automation workflows.",
    Title: 'Ayush Kumar',
    Sub: 'AI/ML & Backend Developer',
  },
];

const Testimonial = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  return (
    <section className="wpo-testimonial-section section-padding">
      <div className="container">
        <div className="wpo-testimonial-wrap">
          <div className="row align-items-center">
            {/* ✅ Left Side */}
            <div className="col-lg-6 col-12">
              <div className="testimonial-left">
                <div className="testimonial-left-inner">
                  <div className="slider-for">
                    <Slider
                      asNavFor={nav2}
                      ref={(slider1) => setNav1(slider1)}
                      dots={false}
                      arrows={false}
                      fade={true}
                    >
                      {testimonials.map((item) => (
                        <div className="testimonial-img" key={item.id}>
                          <img src={item.tImg} alt={item.Title} />
                        </div>
                      ))}
                    </Slider>
                  </div>

                  {/* ✅ Online Colored Icons */}
                  <div className="side-img-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                    />
                  </div>
                  <div className="side-img-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python"
                    />
                  </div>
                  <div className="side-img-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                    />
                  </div>
                  <div className="side-img-4">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="MongoDB"
                    />
                  </div>
                  <div className="side-img-5">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                      alt="TensorFlow"
                    />
                  </div>

                  {/* ✅ Circular Borders */}
                  <div className="border-s1"></div>
                  <div className="border-s2"></div>
                  <div className="border-s3"></div>
                </div>

                {/* ✅ Background Blur Shape */}
                <div className="shape-t">
                  <svg width="750" height="750" viewBox="0 0 750 750" fill="none">
                    <g filter="url(#filter0_f_39_4154)">
                      <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_39_4154"
                        x="0"
                        y="0"
                        width="750"
                        height="750"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_39_4154" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* ✅ Right Side (Text Carousel) */}
            <div className="col-lg-6 col-12">
              <div className="wpo-testimonial-items">
                <div className="slider-nav">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={1}
                    dots={true}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}
                  >
                    {testimonials.map((item) => (
                      <div className="wpo-testimonial-item" key={item.id}>
                        <div className="wpo-testimonial-text">
                          <h4>{item.tTitle}</h4>
                          <p>{item.Des}</p>
                          <div className="wpo-testimonial-text-btm">
                            <h3>
                              {item.Title}, <span>{item.Sub}</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Background Shapes */}
      <div className="left-shape"></div>
      <div className="right-shape">
        <img src="/images/testimonial/shape.png" alt="Shape" />
      </div>
    </section>
  );
};

export default Testimonial;
