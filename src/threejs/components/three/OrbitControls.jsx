import React from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/addons/controls/OrbitControls";

extend({ OrbitControls });

export default function Controls(props) {
    const { camera, gl } = useThree();
    return <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />;
}
