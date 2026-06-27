
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'
import Contact from './contact';
import RelatedProject from './related';


const ProjectSingle = ({
    maxWidth,
    open,
    onClose,
    title,
    pImg,
    psub1img1,
    psub1img2,
    description,
    projectType,
    duration,
    completion,
    techStack,
    strategies,
    results,
}) => {

    const displayDescription = description || "This project focused on building a robust solution to efficiently manage data and provide seamless integration. It was designed with scalability, security, and optimal performance in mind to ensure the system could perform well in modern web applications.";
    const displayType = projectType || "Software Development";
    const displayDuration = duration || "3 Months";
    const displayCompletion = completion || "2025";
    const displayTechStack = techStack || "React · Node.js";
    const displayStrategies = strategies || "Prioritized efficient workflows, leveraging modern tools and methodologies to ensure seamless project execution. Focus on scalability, security, and modular component architecture.";
    const displayResults = results || "Delivered a reliable, high-performance solution that met client requirements and ensured adaptability.";

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
                                                        <h3>{title}</h3>
                                                    </div>
                                                    <p>{displayDescription}</p>
                                                    
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="wpo-project-single-content-des-right">
                                                        <ul>
                                                            <li>Project Type :<span>{displayType}</span></li>
                                                            <li>Tech Stack :<span>{displayTechStack}</span></li>
                                                            <li>Duration :<span>{displayDuration}</span></li>
                                                            <li>Completion :<span>{displayCompletion}</span></li>
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
                                                        <h3>Key Strategies</h3>
                                                    </div>
                                                    <p>{displayStrategies}</p>
                                                    
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-item-quote">
                                                        <p>"Excellent solution that greatly enhances the functionality and appearance of the application. It demonstrates professional-level development and attention to detail."</p>
                                                        <span>Ayush Kumar - <span>Full Stack AI Developer</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-single-title">
                                                <h3>Our Approach</h3>
                                            </div>
                                            <p>We focus on crafting innovative and scalable solutions that address complex challenges in software development. Our process emphasizes seamless collaboration, user-centric design, and the application of cutting-edge technologies to ensure optimal performance and adaptability. By tailoring our approach to the unique requirements of each project, we consistently deliver results that exceed expectations.</p>
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
                                                <div className="col-lg-12">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Project Results & Outcomes</h3>
                                                    </div>
                                                    <p>{displayResults}</p>
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

