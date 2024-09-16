import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons for navigation arrows

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-10 rounded-3xl w-full flex flex-col items-center justify-start'
  >
    {/* Outer container for centering the circle */}
    <div className='flex justify-center items-center mt-[-20px] mb-4'>
      {/* Larger circle with image centered */}
      <div className='relative w-36 h-36'>
        {/* Testimonial image inside the circle */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-32 h-32 rounded-full object-cover absolute inset-2'
        />
      </div>
    </div>

    <div className='text-white text-center mt-4'>
      <p className='text-[18px] leading-[1.6] mb-6'>{testimonial}</p>

      {/* Update for name styling with skyblue "@" symbol */}
      <h4 className='text-[16px] font-medium mb-1'>
        <span className='text-sky-400'>@</span>{name}
      </h4>

      {/* Update for designation and company styling */}
      <p className='text-[14px] font-light text-gray-400'>
        {designation} at {company}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const handleNext = () => {
    setCurrentTestimonial(
      currentTestimonial === testimonials.length - 1
        ? 0
        : currentTestimonial + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1
    );
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className="relative w-full flex items-center justify-center">
        {/* Testimonial Cards */}
        <FeedbackCard {...testimonials[currentTestimonial]} />

        {/* Left Arrow */}
        <button
          className="absolute left-5 text-white text-[24px] cursor-pointer hover:text-gray-400"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-5 text-white text-[24px] cursor-pointer hover:text-gray-400"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");