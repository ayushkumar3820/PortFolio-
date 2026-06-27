import React from "react";
import { motion } from "framer-motion";

// Smooth animated counter (unchanged visually)
const AnimatedCounter = ({
  from,
  to,
  duration,
  decimals = 0,
  className = "text-6xl font-bold",
  prefix = "",
  suffix = "",
}) => {
  const [currentValue, setCurrentValue] = React.useState(from);
  const rafRef = React.useRef(null);
  const startTimeRef = React.useRef(null);

  React.useEffect(() => {
    if (!duration || from === to) {
      setCurrentValue(to);
      return;
    }

    startTimeRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const durationMs = duration * 1000;
    const delta = to - from;

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = from + delta * eased;
      setCurrentValue(value);

      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else setCurrentValue(to);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [from, to, duration]);

  return (
    <span
      className={className}
      aria-live="polite"
      aria-atomic="true"
      role="status"
    >
      {prefix}
      {Number(currentValue).toFixed(decimals)}
      {suffix}
    </span>
  );
};

const About = () => {
  const counterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // === Updated Skill Set ===
  const skillItems = React.useMemo(
    () => [ { count: 82, label: "Machine Learning" },
      { count: 88, label: "JavaScript" },
      { count: 84, label: "Python" },
      
      { count: 78, label: "Data Science" },
      { count: 96, label: "ReactJS" },
      { count: 91, label: "Next.js" },
       { count: 75, label: "MySQL / PostgreSQL/MongoDB" },
     
      
     
    //   { count: 70, label: "Tailwind CSS" },
      { count: 93, label: "Node.js/Express.js" },
    ],
    []
  );

  return (
    <div className="wpo-about-area section-padding" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Experience and Client Satisfaction */}
          <div className="col-lg-5 col-md-12 col-sm-12">
            <motion.div
              className="wpo-about-exprience-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="wpo-about-exprience">
                <motion.h2 variants={counterAnimation}>
                  <AnimatedCounter from={0} to={3} duration={3} decimals={0} />
                </motion.h2>
                <span>Years of Experience</span>
              </div>

              <div className="client">
                <motion.h3 variants={counterAnimation}>
                  <AnimatedCounter from={0} to={93} duration={3} decimals={0} />%
                </motion.h3>
                <p>Clients Satisfactions</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: About Content and Skills */}
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
                  Full Stack AI Engineer with <strong>3 years of experience</strong> delivering
                  production-grade <strong>MERN and Python/FastAPI</strong> applications. Built{" "}
                  <strong>LLM pipelines</strong> (LangChain, RAG, OpenAI) that significantly
                  reduced manual processing effort. Deployed scalable solutions on{" "}
                  <strong>AWS EC2 with Docker</strong> achieving strong uptime and reliability.
                </p>
              </div>

              <div className="wpo-about-funfact">
                {skillItems.map((item, index) => (
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
                        <AnimatedCounter
                          from={0}
                          to={item.count}
                          duration={2.5}
                          decimals={0}
                        />
                        %
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
