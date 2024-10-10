import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Dragon from '../models/Dragon'
import Ship from '../models/Ship'

{/*<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div>*/}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -10, -175];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768)
    {
      screenScale = [0.9, 0.9, 0.9];
    }
    else
    {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustShipForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768)
    {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }
    else
    {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition,]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [shipScale, shipPosition] = adjustShipForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Dragon />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Ship
            isRotating={isRotating}
            scale={shipScale}
            position={shipPosition}
            rotation={[0, 5.2, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
