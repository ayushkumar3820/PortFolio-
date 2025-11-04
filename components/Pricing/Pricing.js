import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const Pricing = () => {
  return (
    <section className="wpo-pricing-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="row justify-content-center">
            <SectionTitle Title={"Service Plans"} />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="wpo-pricing-wrap">
          <div className="row">
            {/* 💻 Basic Plan */}
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-pricing-item">
                <div className="wpo-pricing-top">
                  <div className="pricing-thumb">
                    <span>Basic</span>
                  </div>
                  <div className="wpo-pricing-text">
                    <h2>
                      ₹2,999<span> / month</span>
                    </h2>
                    <p>Ideal for startups or small businesses wanting to get online quickly.</p>
                  </div>
                </div>
                <div className="wpo-pricing-bottom">
                  <div className="wpo-pricing-bottom-text">
                    <ul>
                      <li>Single Page React Website</li>
                      <li>Basic Node.js API Setup</li>
                      <li>Responsive UI with SEO</li>
                      <li>Basic Hosting Deployment</li>
                      <li>Email Support</li>
                    </ul>
                    <Link href="/contact">CHOOSE PLAN</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 🚀 Standard Plan */}
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-pricing-item">
                <div className="wpo-pricing-top">
                  <div className="pricing-thumb">
                    <span>Standard</span>
                  </div>
                  <div className="wpo-pricing-text">
                    <h2>
                      ₹6,499<span> / month</span>
                    </h2>
                    <p>Perfect for growing businesses needing dynamic and scalable apps.</p>
                  </div>
                </div>
                <div className="wpo-pricing-bottom">
                  <div className="wpo-pricing-bottom-text">
                    <ul>
                      <li>Full Stack MERN Development</li>
                      <li>Authentication & APIs</li>
                      <li>Admin Dashboard Integration</li>
                      <li>Basic Cloud Deployment</li>
                      <li>Priority Email & Chat Support</li>
                    </ul>
                    <Link href="/contact">CHOOSE PLAN</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 🤖 Advanced / AI Plan */}
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-pricing-item">
                <div className="wpo-pricing-top">
                  <div className="pricing-thumb">
                    <span>Advanced (AI & Automation)</span>
                  </div>
                  <div className="wpo-pricing-text">
                    <h2>
                      ₹10,999<span> / month</span>
                    </h2>
                    <p>
                      Tailored for enterprises integrating AI, automation, and advanced
                      backend systems.
                    </p>
                  </div>
                </div>
                <div className="wpo-pricing-bottom">
                  <div className="wpo-pricing-bottom-text">
                    <ul>
                      <li>Next.js + FastAPI Integration</li>
                      <li>AI / ML Model Implementation</li>
                      <li>Automation Workflows (n8n / Python)</li>
                      <li>Performance Optimization</li>
                      <li>24/7 Dedicated Support</li>
                    </ul>
                    <Link href="/contact">CHOOSE PLAN</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="shape-p">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4213)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4213"
              x="0"
              y="0"
              width="1500"
              height="1500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
