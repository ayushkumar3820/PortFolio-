import React, { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Grid } from '@mui/material';

const submitHandler = (e) => {
    e.preventDefault();
};

const BlogSingle = ({ maxWidth, open, onClose, title, bImg, create_at, author, comment }) => {
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <div className="modal-close-btn">
                        <button onClick={onClose}>
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                    <section className="wpo-blog-single-section">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-12 col-12">
                                    <div className="wpo-blog-content">
                                        <div className="post format-standard-image">
                                            <div className="entry-media">
                                                <img src={bImg} alt="Blog Image" />
                                            </div>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li>
                                                        <i className="fi flaticon-user"></i> By{' '}
                                                        <Link href="/">{author}</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fi flaticon-comment-white-oval-bubble"></i> Comments{' '}
                                                        {comment}
                                                    </li>
                                                    <li>
                                                        <i className="fi flaticon-calendar"></i> {create_at}
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2>{title}</h2>
                                            <p>
                                                This project highlights the implementation of advanced features using
                                                modern tools and frameworks. It provides an intuitive interface,
                                                efficient performance, and reliable solutions for real-world scenarios.
                                            </p>
                                            <blockquote>
                                                Designed a state-of-the-art application integrating intelligent
                                                solutions to meet diverse user needs. Ensures seamless functionality
                                                and enhanced user engagement.
                                            </blockquote>
                                            <p>
                                                Leveraged cutting-edge technologies to create a scalable and
                                                user-friendly platform. Features include secure operations, advanced
                                                analytics, and streamlined workflows for maximum efficiency.
                                            </p>
                                            <div className="gallery">
                                                <div>
                                                    <img src="images/blog/openai-content-generation-wordpress-app-as-saas-609860.png\" alt="Gallery Image" />
                                                </div>
                                                <div>
                                                    <img src="images/blog/uber-clone-500x500.webp" alt="Gallery Image" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tag-share clearfix">
                                            <div className="tag">
                                                <span>Tags: </span>
                                                <ul>
                                                    <li>
                                                        <Link href="/">Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Technology</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Innovation</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tag-share-s2 clearfix">
                                            <div className="tag">
                                                <span>Share: </span>
                                                <ul>
                                                    <li>
                                                        <Link href="/">Facebook</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">WhatsApp</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">LinkedIn</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Instagram</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="author-box">
                                            <div className="author-avatar">
                                                <Link href="/" target="_blank">
                                                    <img src="images/testimonial/img-1.jpg" alt="Author" />
                                                </Link>
                                            </div>
                                            <div className="author-content">
                                                <Link href="/" className="author-name">
                                                    Author: Ayush kumar
                                                </Link>
                                                <p>
                                                    Passionate about creating impactful solutions that combine
                                                    creativity, technology, and practicality.
                                                </p>
                                                <div className="socials">
                                                    <ul className="social-links">
                                                        <li>
                                                            <Link href="https://www.facebook.com">
                                                                <i className="ti-facebook"></i>
                                                            </Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link href="https://api.whatsapp.com/send?phone=919761688257">
                                                                <i className="ti-whatsapp"></i>
                                                            </Link>
                                                        </li> */}
                                                        <li>
                                                            <Link href="https://www.linkedin.com">
                                                                <i className="ti-linkedin"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.instagram.com">
                                                                <i className="ti-instagram"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="more-posts">
                                            <div className="previous-post">
                                                <Link href="/">
                                                    <span className="post-control-link">Previous Post</span>
                                                    <span className="post-name">Explore earlier updates and features.</span>
                                                </Link>
                                            </div>
                                            <div className="next-post">
                                                <Link href="/">
                                                    <span className="post-control-link">Next Post</span>
                                                    <span className="post-name">Discover upcoming developments.</span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="comments-area">
                                            <div className="comments-section">
                                                <h3 className="comments-title">Comments</h3>
                                                <ol className="comments">
                                                    <li className="comment even thread-even depth-1" id="comment-1">
                                                        <div id="div-comment-1">
                                                            <div className="comment-theme">
                                                                <div className="comment-image">
                                                                    <img src="images/blog/img-2 (2).jpg" alt="Comment" />
                                                                </div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>
                                                                            XYZ{''}
                                                                            <span className="comments-date">
                                                                                January 12, 2025, at 9:00 am
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>
                                                                            Thank you for sharing such insightful information!
                                                                        </p>
                                                                        <div className="comments-reply">
                                                                            <Link href="/" className="comment-reply-link">
                                                                                <span>Reply</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Grid>
            </Dialog>
        </Fragment>
    );
};

export default BlogSingle;
