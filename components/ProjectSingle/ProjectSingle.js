
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'
import Contact from './contact';
import RelatedProject from './related';


const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, psub1img1, psub1img2, }) => {


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body project-modal">
                    <div className="modal-close-btn">
                        <button onClick={onClose}><i className='fa fa-close'></i></button>
                    </div>
                    <div className="wpo-project-single-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-project-single-wrap">
                                        <div className="wpo-project-single-item">
                                            <div className="row align-items-center mb-5">
                                                <div className="col-lg-7">
                                                    <div className="wpo-project-single-title">
                                                        <h3>{title} Project</h3>
                                                    </div>
                                                    <p>This project focused on building a robust backend solution to efficiently
                                                         manage data and provide seamless integration with front-end applications. 
                                                         It was designed with scalability, security, and optimal performance in mind to 
                                                         ensure the system could grow and perform well in modern web applications.</p>
                                                    
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="wpo-project-single-content-des-right">
                                                        <ul>
                                                            {/* <li>Unver :<span>Gurugram,Haryana</span></li>
                                                            <li>Client :<span>No Name</span></li>
                                                            <li>Consult :<span>No Name</span></li> */}
                                                            <li>Project Type :<span>Software developer </span></li>
                                                            <li>Duration :<span>AnyTime</span></li>
                                                            <li>Completion :<span> 2025</span></li>
                                                            <li>Share :<span>Creative, Portfolio</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpo-project-single-main-img">
                                                <div className="thumbnail">
                                                    <img src={pImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Our Strategies</h3>
                                                    </div>
                                                    <p>In software development, our strategies are centered on building robust and scalable solutions tailored to diverse project requirements.
                                                         We prioritize efficient workflows, leveraging modern tools and methodologies to ensure seamless project execution.
                                                          By focusing on user needs and future scalability, we create software that not only meets current requirements but also adapts to evolving demands.
                                                           Collaboration and communication are key elements of our approach, enabling us to deliver innovative and high-quality software projects across various domains.</p>
                                                    
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-item-quote">
                                                        <p>"Excellent solution that greatly enhances the functionality and appearance of the application. 
                                                            It demonstrates professional-level development and attention to detail. 
                                                            I’m extremely satisfied with the results."</p>
                                                        <span>Ayush - <span>Software Engineer</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-single-title">
                                                <h3>Our approach</h3>
                                            </div>
                                            <p>We focus on crafting innovative and scalable solutions that address complex challenges in software development. 
                                                Our process emphasizes seamless collaboration, user-centric design, and the application of cutting-edge technologies to ensure optimal performance and adaptability. 
                                                By tailoring our approach to the unique requirements of each project, we consistently deliver results that exceed client expectations. 
                                                Through meticulous planning and execution, we aim to create systems that not only meet current needs but also anticipate future growth and advancements in the industry.</p>
                                        </div>
                                        <div className="wpo-project-single-gallery">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={psub1img1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={psub1img2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Resieved goals</h3>
                                                    </div>
                                                    <ul>
                                                        <li>Successfully implemented scalable backend architecture for seamless performance.</li>
                                                        <li>Enhanced data management with efficient API endpoints.</li>
                                                        <li>Achieved secure and optimized integration with front-end systems.</li>
                                                        <li>Delivered a robust solution tailored to client requirements.</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 list-widget-s">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Results</h3>
                                                    </div>
                                                    <ul>
                                                        <li>Developed an efficient and scalable system with seamless integration.</li>
                                                        <li>Ensured long-term adaptability through robust architecture.</li>
                                                        <li>Delivered a reliable and user-focused solution..</li>
                                                        <li>Conducted rigorous testing for optimal performance and usability.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <RelatedProject />
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-contact-area">
                                                <div className="wpo-contact-title">
                                                    <h2>Have project in mind? Let's discuss</h2>
                                                    <p>Get in touch with us to see how we can help you with your project</p>
                                                </div>
                                                <div className="wpo-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ProjectSingle;

