import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  try {
    const { scene } = useGLTF("/planet/scene.gltf");

    // Log to check if the scene loaded correctly
    console.log("GLTF Model Loaded: ", scene);

    return (
      <primitive
        object={scene}
        scale={2.5}  // Adjust this if necessary
        position={[0, -1.5, 0]}  // Ensure the model is visible in the camera
        rotation={[0, 0, 0]}
      />
    );
  } catch (error) {
    // Catch and log any errors related to loading the GLTF
    console.error("Error loading GLTF model: ", error);
    return null;  // Return nothing if the model fails to load
  }
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;