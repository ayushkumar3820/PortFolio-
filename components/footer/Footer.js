import React from 'react';
import { Link } from 'react-scroll';
import CtaSection from '../ctaSection/ctaSection';

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = () => {
  return (
    <footer className="wpo-site-footer">
      <CtaSection />
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            {/* ===== About Section ===== */}
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link className="site-logo" to="/">
                    <img src="images/logo.png" alt="Ayush Kumar Logo" />
                    Ayush.
                  </Link>
                </div>
                <p>
                  Full Stack AI Engineer with 3 years of experience delivering production-grade
                  MERN and Python/FastAPI applications. Expert in LangChain, RAG, OpenAI, and
                  AWS EC2 deployment. Based in Gurgaon, Haryana — open to full-time opportunities.
                </p>

                <div className="social-icons">
                  <ul className="social-links">
                    <li>
                      <a
                        href="https://github.com/ayushkumar3820"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ayushkumar3820/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ayushkumar3820/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:ayushkumarnbd125@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti-email"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== Navigation ===== */}
            <div className="col col-lg-2 col-md-6 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Navigation</h3>
                </div>
                <ul>
                  <li>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="portfolio" spy={true} smooth={true} duration={500}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="service" spy={true} smooth={true} duration={500}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== Services ===== */}
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget link-widget service-link-widget">
                <div className="widget-title">
                  <h3>Services</h3>
                </div>
                <ul>
                  <li>
                    <Link to="service" spy={true} smooth={true} duration={500}>
                      Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link to="service" spy={true} smooth={true} duration={500}>
                      AI Development
                    </Link>
                  </li>
                  <li>
                    <Link to="service" spy={true} smooth={true} duration={500}>
                      Cloud Development & Hosting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== Newsletter ===== */}
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  Stay updated with the latest AI, MERN, and automation innovations directly from my projects.
                </p>
                <form onSubmit={SubmitHandler}>
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit">
                      <i className="ti-email"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Background Shape ===== */}
        <div className="shadow-shape">
          <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
            <g filter="url(#filter0_f_39_3833)">
              <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_3833"
                x="0"
                y="0"
                width="1606"
                height="1606"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* ===== Copyright ===== */}
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="separator"></div>
            <p className="copyright">
              © {new Date().getFullYear()} Ayush Kumar — Full Stack Engineer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
