import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Car(props) {
    const { nodes, materials } = useGLTF("./models/car.glb");
    const ref = useRef();
    const tl = useRef();

    const scroll = useScroll();



    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())


    })
    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        tl.current.to(
            ref.current.rotation,
            {
                duration: 0.5,
                y: -1.6,

            },
            0
        )
        tl.current.to(
            ref.current.position,
            {
                duration: 0.5,

                x: 70,
                z: 150,


            },
            0
        )


        tl.current.to(
            ref.current.rotation,
            {
                duration: 0.5,
                y: -4,

            },
            0.5
        )
        tl.current.to(
            ref.current.position,
            {
                duration: 0.5,


                z: -150,


            },
            0.5
        )

        tl.current.to(
            ref.current.rotation,
            {
                duration: 0.5,
                y: -6.2,

            },
            1
        )
        tl.current.to(
            ref.current.position,
            {
                duration: 0.5,


                z: 80,
                x: 160


            },
            1
        )






    }, [])
    return (
        <group {...props} dispose={null}>
            <group position={[0, -75.092, 75.092]} rotation={[-Math.PI, 0, 0]} ref={ref}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_087_LicPlate_white_0.geometry}
                            material={materials.LicPlate_white}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_087_LicPlate_black_0.geometry}
                            material={materials.LicPlate_black}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_087_LicPlate_blue_0.geometry}
                            material={materials.LicPlate_blue}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_087_LicPlate_yellow_0.geometry}
                            material={materials.LicPlate_yellow}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_088_LicPlate_white_0.geometry}
                            material={materials.LicPlate_white}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_088_LicPlate_black_0.geometry}
                            material={materials.LicPlate_black}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_088_LicPlate_blue_0.geometry}
                            material={materials.LicPlate_blue}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.desirefxme_088_LicPlate_yellow_0.geometry}
                            material={materials.LicPlate_yellow}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_001_carpaint_0.geometry}
                        material={materials.carpaint}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_002_windowglass_0.geometry}
                        material={materials.windowglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_003_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_004_clearglass_0.geometry}
                        material={materials.clearglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_005_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_006_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_007_clearglass_0.geometry}
                        material={materials.clearglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_008_clearglass_0.geometry}
                        material={materials.clearglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_009_windowglass_0.geometry}
                        material={materials.windowglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_010_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_011_windowglass_0.geometry}
                        material={materials.windowglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_012_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_013_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_014_mirror_0.geometry}
                        material={materials.mirror}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_015_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_016_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_017_rim_second_0.geometry}
                        material={materials.rim_second}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_018_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_019_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_020_carpaint_0.geometry}
                        material={materials.carpaint}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_021_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_022_redglass_0.geometry}
                        material={materials.redglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_023_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_024_redglass_0.geometry}
                        material={materials.redglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_025_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_026_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_027_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_028_orangeglass_0.geometry}
                        material={materials.orangeglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_029_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_030_lightglass_0.geometry}
                        material={materials.lightglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_031_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_032_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_033_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_034_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_035_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_036_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_037_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_038_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_039_carpaint_second_0.geometry}
                        material={materials.carpaint_second}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_040_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_041_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_042_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_043_clearglass_0.geometry}
                        material={materials.clearglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_044_redglass_0.geometry}
                        material={materials.redglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_045_clearglass_0.geometry}
                        material={materials.clearglass}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_046_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_047_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_048_mattemetal_0.geometry}
                        material={materials.mattemetal}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_049_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_050_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_051_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_052_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_053_tire_0.geometry}
                        material={materials.tire}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_054_interior_0.geometry}
                        material={materials.interior}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_055_carpaint_0.geometry}
                        material={materials.carpaint}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_056_interior_0.geometry}
                        material={materials.interior}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_057_interior_0.geometry}
                        material={materials.interior}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_058_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_059_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_060_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_061_rim_second_0.geometry}
                        material={materials.rim_second}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_062_tire_0.geometry}
                        material={materials.tire}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_063_tire_0.geometry}
                        material={materials.tire}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_064_rim_second_0.geometry}
                        material={materials.rim_second}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_065_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_066_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_067_interior_0.geometry}
                        material={materials.interior}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_068_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_069_red_0.geometry}
                        material={materials.material}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_070_red_0.geometry}
                        material={materials.material}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_071_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_072_red_0.geometry}
                        material={materials.material}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_073_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_074_interior_0.geometry}
                        material={materials.interior}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_075_tire_0.geometry}
                        material={materials.tire}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_076_red_0.geometry}
                        material={materials.material}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_077_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_078_brakedisk_0.geometry}
                        material={materials.brakedisk}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_079_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_080_rim_second_0.geometry}
                        material={materials.rim_second}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_081_carpaint_0.geometry}
                        material={materials.carpaint}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_082_black_0.geometry}
                        material={materials.black}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_083_chrome_0.geometry}
                        material={materials.chrome}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_084_carpaint_0.geometry}
                        material={materials.carpaint}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_085_carpaint_0.geometry}
                        material={materials.carpaint}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desirefxme_086_carpaint_0.geometry}
                        material={materials.carpaint}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./models/car.glb");