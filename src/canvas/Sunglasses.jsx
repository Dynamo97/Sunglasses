import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Sunglasses = () => {

    const snap = useSnapshot(state);

    const { nodes, materials } = useGLTF('/rayban_sunglasses/scene.gltf');


    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

    const stateString = JSON.stringify(state);

    const {baseMaterial1, baseMaterial2, baseMaterial3} = materials.sunglass;

    const frameColor = snap.MainColor;
    const armColor = snap.armColor;
    

    return (
        <group key={stateString} dispose={null}>

            {/* Frames */}
            <group position={[-0.025, 0.435, 0.061]} rotation={[1.3, 0, 0]} scale={0.121}>
                <mesh geometry={nodes.Object_8.geometry} material={baseMaterial3} material-color={frameColor}/>
                <mesh geometry={nodes.Object_9.geometry} material={baseMaterial3} material-color={frameColor}/>
                <mesh geometry={nodes.Object_10.geometry} material={baseMaterial3} material-color={frameColor}/>
            </group>
            {/* Left Arm */}
            <group position={[0.654, 0.524, -0.244]} rotation={[1.517, -0.12, -2.876]} scale={[0.032, 0.157, 0.024]} >
                {/* Base */}
                <mesh geometry={nodes.Object_12.geometry} material={baseMaterial1}  material-color={armColor}/>
                {/* Logo */}
                <mesh geometry={nodes.Object_13.geometry} material={materials['Material.002']} />
            </group>
            {/* Right Arm */}
            <mesh geometry={nodes.Object_4.geometry} material={baseMaterial1} material-color={armColor} position={[-0.618, 0.394, -0.714]} rotation={[1.476, 0.05, -2.889]} scale={[0.032, 0.157, 0.024]} />
            {/* Left lens */}
            <mesh geometry={nodes.Object_6.geometry} material={materials.lambert1}  position={[0.335, 0.414, 0.09]} rotation={[2.99, -0.116, 0.012]} scale={0.542} />
            {/* Right lens */}
            <mesh geometry={nodes.Object_15.geometry} material={materials.lambert1}  position={[-0.387, 0.417, 0.089]} rotation={[2.987, 0.125, 0.012]} scale={[-0.542, 0.542, 0.542]} />
        </group>



        // <group key={stateString}>
        //     <mesh
        //         castShadow
        //         geometry={nodes.T_Shirt_male.geometry}
        //         material={materials.lambert1}
        //         material-roughness={1}
        //         dispose={null}
        //     >

        //         {snap.isFullTexture && (
        //             <Decal
        //                 position={[0, 0, 0]}
        //                 rotation={[0, 0, 0]}
        //                 scale={1}
        //                 map={fullTexture}
        //             />
        //         )}
        //         {snap.isLogoTexture && (
        //             <Decal
        //                 position={[0, 0.04, 0.15]}
        //                 rotation={[0, 0, 0]}
        //                 scale={0.15}
        //                 map={logoTexture}
        //                 anisotropy={16}
        //                 depthTest={false}
        //                 depthWrite={true}
        //             />
        //         )}
        //     </mesh>
        //     <mesh></mesh>
        // </group>
    )
}

export default Sunglasses