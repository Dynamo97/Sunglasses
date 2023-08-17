import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import state from '../store';

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);

    useFrame((state, delta) => {
        const isBreakPoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        //set initial pos of model
        let targetPosition = [-0.8, 0, 2];
        if (snap.intro) {
            if(isBreakPoint) targetPosition = [0, 0, 2];
            if(isMobile) targetPosition = [0, 0.2, 2.5];
        } else {
            if(isMobile) targetPosition = [0, 0, 2.5];
            else targetPosition = [0, 0, 2];
        }

        //set model camera position
        easing.damp3(
            state.camera.position,
            targetPosition,
            0.25,
            delta
        )
        
        if (snap.intro) {
            easing.dampE(
                group.current.rotation,
                [state.pointer.y / 10, -state.pointer.x / 10, 0],
                0.25,
                delta,
    
            )
        } else {
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 1.2, -state.pointer.x / 1.2, 0],
            0.25,
            delta,

        )}
    })

    //set model rotation smoothly
   

  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig