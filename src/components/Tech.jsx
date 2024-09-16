import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // Ensure styles are imported

const Tech = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  // Detect Android user agent
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("android") > -1) {
      setIsAndroid(true);
    }

    // Check for WebGL support
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setIsWebGLSupported(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Heading Section */}
      <h2 className={styles.sectionSubText}>MY</h2>
      <h3 className={styles.sectionHeadText}>Skills.</h3>

      {/* Balls Section */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div 
            className="w-28 h-28 flex justify-center items-center" 
            key={technology.name} 
            style={{ minWidth: '112px', minHeight: '112px' }}
          >
            {/* Force static images on Android browsers or if WebGL is not supported */}
            {isAndroid || !isWebGLSupported ? (
              <img src={technology.icon} alt={technology.name} style={{ width: "100%", height: "100%" }} />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");