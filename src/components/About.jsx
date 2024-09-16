import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a software engineer with over two years of experience in developing and optimizing web applications, proficient in both frontend and backend technologies. 
        Skilled in working with Java, Python, and frameworks like Spring Boot. 
        Hands-on experience in cloud technologies, DevOps tools, and CI/CD pipelines, with a strong focus on automation and deployment of scalable applications. 
        Adept at database management, API development, and testing, with a solid understanding of the software development lifecycle. 
        Proven ability to solve complex technical problems, improve system efficiency, and deliver high-quality software solutions.
      </motion.p>

      {/* Resume Download Button */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="mt-8"
      >
        <a 
          href="https://drive.google.com/file/d/1rxFixldzhxPeKRIcmsD-9GxzwXyYQ1lM/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#915EFF] hover:bg-[#7E44D6] text-white font-bold py-3 px-6 rounded-lg inline-flex items-center"
        >
          My Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");