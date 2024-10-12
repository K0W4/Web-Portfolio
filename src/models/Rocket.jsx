import { useRef, useEffect } from 'react'

import rocketScene from '../assets/3d/rocket.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const rocket = ({ isRotating, ...props }) => {
  const ref = useRef();  
  const { scene, animations } = useGLTF(rocketScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions['Take 001'].play();
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default rocket