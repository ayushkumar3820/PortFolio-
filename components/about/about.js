import React from 'react';
import { motion } from 'framer-motion';

// Animated Counter Component
const AnimatedCounter = ({ from, to, duration, decimals = 0 }) => {
    const [currentValue, setCurrentValue] = React.useState(from);

    React.useEffect(() => {
        const interval = 16.67;
        const totalFrames = duration * 1000 / interval;
        const increment = (to - from) / totalFrames;

        let currentFrame = 0;
        const timer = setInterval(() => {
            currentFrame++;
            const newValue = from + increment * currentFrame;

            if (currentFrame >= totalFrames) {
                setCurrentValue(to);
                clearInterval(timer);
            } else {
                setCurrentValue(newValue);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [from, to, duration]);

    // Wrap the number in a span with specific font size
    return <span className="text-6xl font-bold">{currentValue.toFixed(decimals)}</span>;
};

const About = () => {
    const counterAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 1.5,
                ease: 'easeInOut'
            } 
        },
    };

    return (
        <div className="wpo-about-area section-padding" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <motion.div
                            className="wpo-about-exprience-wrap"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="wpo-about-exprience">
                                <motion.h2 variants={counterAnimation}>
                                    <AnimatedCounter from={0} to={1.2} duration={3} decimals={1} />
                                </motion.h2>
                                <span>Years of Experience</span>
                            </div>
                            <div className="client">
                                <motion.h3 variants={counterAnimation}>
                                    <AnimatedCounter from={0} to={90} duration={3} />%
                                </motion.h3>
                                <p>Clients Satisfactions</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
                        <motion.div
                            className="wpo-about-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="wpo-about-title">
                                <h2>My Advantage</h2>
                                <p>
                                    I build scalable full-stack solutions with MongoDB, Express, React, and Node.js,
                                    turning complex ideas into user-friendly systems.
                                </p>
                            </div>

                            <div className="wpo-about-funfact">
                                {[ 
                                    { count: 98, label: 'JavaScript' },
                                    { count: 92, label: 'NodeJs' },
                                    { count: 88, label: 'ExpressJs' },
                                    { count: 72, label: 'ReactJS' },
                                    { count: 83, label: 'MongoDB' },
                                    { count: 79, label: 'PostgreSql' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="grid"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        variants={counterAnimation}
                                    >
                                        <div className="grid-inner">
                                            <h3>
                                                <AnimatedCounter from={0} to={item.count} duration={2.5} decimals={0} />%
                                            </h3>
                                            <p>{item.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;