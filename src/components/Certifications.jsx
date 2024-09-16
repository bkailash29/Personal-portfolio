import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { download } from "../assets";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants"; 
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  name,
  description,
  tags,
  image,
  certification_link,
}) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' style={{ minHeight: "500px", height: 'auto', overflow: 'visible', zIndex: 10 }}>
      <div className='relative w-full h-[230px]'>
        <img
          src={image || "path_to_fallback_image"}  
          alt={name || "Certification image"}  
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(certification_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={download} 
              alt='certification link'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px] sm:text-[20px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px] sm:text-[12px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] sm:text-[12px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Heading Section */}
      <h2 className={`${styles.sectionSubText} text-center sm:text-[20px]`}>My Achievements</h2>
      <h3 className={`${styles.sectionHeadText} text-center sm:text-[28px]`}>Certifications.</h3>

      {/* Paragraph Section */}
      <div className='w-full px-4 flex justify-center'>
        <p
          className='mt-3 text-secondary text-[17px] sm:text-[15px] max-w-[600px] leading-[30px] mx-auto text-center'
        >
          Here are some of the certifications I have earned in the field of technology and cloud computing.
        </p>
      </div>

      {/* Certifications Section */}
      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {certifications.map((certification, index) => (
          <CertificationCard key={`certification-${index}`} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");