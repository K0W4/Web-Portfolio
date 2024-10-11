import { useRef, useEffect } from 'react'

import shipScene from '../assets/3d/ship.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Ship = ({ isRotating, ...props }) => {
  const ref = useRef();  
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating)
    {
      actions['Take 001'].play();
    }
    else
    {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Ship