"use client"

import { OrbitControls, ScrollControls, Stage, PerspectiveCamera, Text, Scroll, useScroll } from "@react-three/drei";
import { Car } from "./Car";
import { useFrame } from "@react-three/fiber";
import Section1 from "./Section1";


const Experience = () => {
   
    return (
        <>

            <ambientLight intensity={1} />
            {/* Mouse click controller Disabled Below */}
            {/* <OrbitControls enableZoom={false} /> */}

            <ScrollControls pages={3} damping={0.25}>
                <Scroll html style={{ width: "100%" }}>
                    {/* DOM contents in here will scroll along */}


                <Section1 />
                    

                    
                </Scroll>
                <Stage shadows="none" >
                    <Car rotation-y={-Math.PI / 2} position={[0, -150, 0]} />
                </Stage>
            </ScrollControls>
        </>
    )
}

export default Experience;