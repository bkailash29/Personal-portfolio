import { motion } from "framer-motion";
import { styles } from "../styles";
import MyImage from '../assets/my_image.png';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen flex items-center justify-between mx-auto`}>
      
      {/* Adjusted Text Alignment */}
      <div className={`flex-1 max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-start`}>
        <div className='z-10' style={{ marginLeft: "auto", maxWidth: "500px" }}> {/* Used marginLeft: auto for precise alignment */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Kailash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer | Ex-Huawei | DevOps Enthusiast <br className='sm:block hidden' />
          </p>
          
          {/* Social Media Section */}
          <div className="mt-6">
            <p className='text-white text-[16px] font-semibold mb-2'>
              Follow me:
            </p>
            <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/bkailash29" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white hover:text-[#0077b5] w-6 h-6" />
              </a>
              <a href="https://github.com/bkailash29" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white hover:text-gray-400 w-6 h-6" />
              </a>
              <a href="https://twitter.com/bkailash29" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white hover:text-[#1DA1F2] w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right-Side Image */}
      <div className="flex-1 h-full flex justify-end items-center pr-8">
        <img 
          src={MyImage} 
          alt="Kailash Image" 
          className="h-full max-h-[90vh] w-auto object-contain rounded-xl"
        />
      </div>

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;