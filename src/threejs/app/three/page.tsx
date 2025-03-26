"use client";

import { Canvas } from "@react-three/fiber";
import Box from "../../components/three/Box";
import Draggable from "../../components/three/Draggable";
import Floor from "../../components/three/Floor";
import LightBulb from "../../components/three/LightBulb";
import OrbitControls from "../../components/three/OrbitControls";
import css from "../../styles/Three.module.css";

export default function Page() {
  return (
    <div className={`h-full rounded-xl overflow-hidden ${css.scene}`}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7]
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <Draggable>
          <LightBulb position={[0, 3, 0]} />
          <Box rotateX={3} rotateY={0.2} />
        </Draggable>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
