import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="static-hero" id="home">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="wpo-static-hero-inner">
                  {/* ====== Heading ====== */}
                  <div data-swiper-parallax="500" className="slide-title">
                    <h1>
                      <span
                        style={{ color: "#FFD700", fontSize: "80px" }}
                      >
                        Hello,
                      </span>
                      <Typewriter
                        options={{
                          strings: [
                            "I Am Ayush Kumar",
                            "Full Stack AI Developer",
                            "MERN Stack Engineer",
                            "Python & FastAPI Expert",
                            "LangChain & RAG Builder",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 150,
                          deleteSpeed: 50,
                        }}
                      />
                    </h1>
                  </div>

                  {/* ====== Subtitle ====== */}
                  <div data-swiper-parallax="300" className="slide-sub-title">
                    <h5>
                      Full Stack AI Developer
                    </h5>
                  </div>

                  {/* ====== Description ====== */}
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>
                      Full Stack AI Engineer with <strong>3 years of experience</strong> delivering
                      production-grade <strong>MERN and Python/FastAPI</strong> applications
                      serving high-volume traffic. Built <strong>LLM pipelines</strong> (LangChain, RAG, OpenAI)
                      and deployed scalable solutions on <strong>AWS EC2 with Docker</strong>.
                    </p>
                  </div>

                  <div className="clearfix"></div>

                  {/* ====== Button ====== */}
                  <div className="slide-btn">
                    <Link
                      className="theme-btn"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Right Hero Image + Icons ====== */}
      <div className="static-hero-right">
        <div className="static-hero-img">
          <div className="static-hero-img-inner">
                        <img src='images/imresizer-1735394036550.jpg' alt="" />
            <div className={styles.icon1}>
                            <img src='images/icon/node-js-icon.svg' alt="Node.js" className={styles.floatingImage} />
            </div>
            <div className={styles.icon2}>
                            <img src='images/icon/illustrator.svg' alt="Illustrator" className={styles.floatingImage} />
            </div>

            <div className={styles.icon3}>
                            <img src='images/img-4.jpg' alt="" className={styles.floatingImage} />
                        </div>
                        <div className={styles.icon5}>
                            <img src='images/img-5.jpg' alt="" className={styles.floatingImage} />
            </div>

          </div>
        </div>
      </div>

      {/* ====== Shapes (unchanged UI) ====== */}
      <div className="shape-1">
        <svg
          width="1038"
          height="938"
          viewBox="0 0 1038 938"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_39_4392)">
            <circle cx="290.5" cy="282.5" r="247.5" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4392"
              x="-457"
              y="-465"
              width="1495"
              height="1495"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_39_4392"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="shape-2">
        <svg
          width="1295"
          height="938"
          viewBox="0 0 1295 938"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" filter="url(#filter0_f_39_4393)">
            <circle cx="647.5" cy="561.5" r="247.5" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4393"
              x="0"
              y="-86"
              width="1295"
              height="1295"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_39_4393"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="shape-3">
        <svg
          width="752"
          height="747"
          viewBox="0 0 752 747"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.45" filter="url(#filter0_f_39_4394)">
            <circle cx="647.5" cy="99.5" r="247.5" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4394"
              x="0"
              y="-548"
              width="1295"
              height="1295"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_39_4394"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="line-shape-1">
        <img src="images/slider/line-1.png" alt="line shape 1" />
      </div>
      <div className="line-shape-2">
        <img src="images/slider/line-2.png" alt="line shape 2" />
      </div>
    </section>
  );
};

export default Hero;
