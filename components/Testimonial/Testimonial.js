import React, { useState } from 'react';
import Slider from "react-slick";

const testimonial = [
    {
        id: '01',
        tImg: 'images/testimonial/img-1.jpg',
        tTitle: 'Great teamwork and collaboration',
        Des: "The project was delivered efficiently, leveraging effective communication and collaboration between all team members. We ensured the project met all requirements and exceeded client expectations, resulting in a highly successful deployment.",
        Title: 'Ayush Kumar',
        Sub: "Full Stack Developer",
    },
    {
        id: '02',
        tImg: 'images/testimonial/img-4.jpg',
        tTitle: 'Efficient and high-quality solution',
        Des: "The team demonstrated exceptional technical expertise and problem-solving skills throughout the project. The solution is scalable, secure, and delivered with top-notch performance that aligns with modern software engineering practices.",
        Title: 'Ayush Kumar',
        Sub: "Full Stack Developer",
    },
    {
        id: '03',
        tImg: 'images/testimonial/Next js.jpg',
        tTitle: 'Excellent development process',
        Des: "The project’s success is a direct result of the structured development approach we followed. We adhered to best practices in software development and prioritized client requirements at every stage, ensuring quality and on-time delivery.",
        Title: 'Ayush Kumar',
        Sub: "Full Stack Developer",
    },
    {
        id: '04',
        tImg: 'images/testimonial/img-6.png',
        tTitle: 'Seamless integration and scalability',
        Des: "The API we developed for this project ensured smooth integration with the client’s systems and was designed for scalability to handle future growth. It’s a prime example of how thoughtful engineering can contribute to a project’s long-term success.",
        Title: 'Ayush Kumar',
        Sub: "Full Stack Developer",
    },
    {
        id: '05',
        tImg: 'images/testimonial/img-5.jpg',
        tTitle: 'Smooth user experience',
        Des: "Our focus on user experience ensured that the application was intuitive and easy to use, which greatly enhanced the overall user satisfaction and engagement with the final product.",
        Title: 'Ayush Kumar',
        Sub: "Full Stack Developer",
    },
    {
        id: '06',
        tImg: 'images/testimonial/FreeImageKit.com_Img-size(250x250)px.png',
        tTitle: 'Comprehensive support and maintenance',
        Des: "We provided comprehensive support and maintenance throughout the development lifecycle and continue to support the client post-launch, ensuring the application operates optimally and remains up-to-date.",
        Title: 'Ayush Kumar',
        Sub: "Full Stack Developer",
    },
]


const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-left">
                                <div className="testimonial-left-inner">
                                    <div className="slider-for">
                                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
                                            {
                                                testimonial.map((tesmnl, tsm) => (
                                                    <div className="testimonial-img" key={tsm}>
                                                        <img src={tesmnl.tImg} alt="" />
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    <div className="side-img-1"><img src='images/testimonial/img-4.jpg' alt="" /></div>
                                    <div className="side-img-2"><img src='images/testimonial/img-3.jpg' alt="" /></div>
                                    <div className="side-img-3"><img src='images/testimonial/img-6.png' alt="" /></div>
                                    <div className="side-img-4"><img src='images/testimonial/img-5.jpg' alt="" /></div>
                                    <div className="side-img-5"><img src='images/testimonial/FreeImageKit.com_Img-size(250x250)px.png' alt="" /></div>
                                    <div className="border-s1"></div>
                                    <div className="border-s2"></div>
                                    <div className="border-s3"></div>
                                </div>
                                <div className="shape-t">
                                    <svg width="750" height="750" viewBox="0 0 750 750" fill="none">
                                        <g filter="url(#filter0_f_39_4154)">
                                            <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_39_4154" x="0" y="0" width="750" height="750"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                    result="shape" />
                                                <feGaussianBlur stdDeviation="125"
                                                    result="effect1_foregroundBlur_39_4154" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
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
                                    >
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="wpo-testimonial-item" key={tsm}>
                                                    <div className="wpo-testimonial-text">
                                                        <h4>{tesmnl.tTitle}</h4>
                                                        <p>{tesmnl.Des}</p>
                                                        <div className="wpo-testimonial-text-btm">
                                                            <h3>{tesmnl.Title}, <span>{tesmnl.Sub}</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="left-shape"></div>
            <div className="right-shape"><img src="images/testimonial/shape.png" alt="" /></div>
        </section>
    );
}

export default Testimonial;