"use client";

import React from "react";

export default function Box(props) {
    return (
        <mesh {...props} recieveShadow={true} castShadow>
            <boxGeometry />
            <meshPhysicalMaterial color={"white"} />
        </mesh>
    );
}
