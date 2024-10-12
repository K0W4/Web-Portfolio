import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Space from '../models/Space'
import Rocket from '../models/Rocket'
import HomeInfo from '../components/HomeInfo'
import Planet from '../models/planet'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustPlanetForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -10, -175];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768)
    {
      screenScale = [0.7, 0.7, 0.7];
    }
    else
    {
      screenScale = [0.85, 0.85, 0.85];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustRocketForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768)
    {
      screenScale = [0.015, 0.015, 0.015];
      screenPosition = [1, -7, -7];
    }
    else
    {
      screenScale = [0.02, 0.02, 0.02];
      screenPosition = [1, -7, -7];
    }

    return [screenScale, screenPosition];
  }

  const [planetScale, planetPosition, planetRotation] = adjustPlanetForScreenSize();
  const [rocketScale, rocketPosition] = adjustRocketForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
        style={{ backgroundColor: '#000000' }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Space isRotating={isRotating} />

          <Planet 
            position={planetPosition}
            scale={planetScale}
            rotation={planetRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Rocket
            isRotating={isRotating}
            scale={rocketScale}
            position={rocketPosition}
            rotation={[0, 0.25, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home;