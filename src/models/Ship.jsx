import React from 'react'

import shipScene from '../assets/3d/ship.glb'
import { useGLTF } from '@react-three/drei'

const Ship = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(shipScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Ship