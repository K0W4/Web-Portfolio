import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import spaceScene from '../assets/3d/space.glb'

const Space = ({ isRotating } ) => {
  const space = useGLTF(spaceScene);
  const spaceRef = useRef();

  useFrame((_, delta) => {
    if (isRotating)
    {
      spaceRef.current.rotation.y += 0.95 * delta
    }
  })

  return (
    <mesh ref={spaceRef} scale={[2, 2, 2]} >
        <primitive object={space.scene} />
    </mesh>
  )
}

export default Space;