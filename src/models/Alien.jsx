import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import scene from '../assets/3d/alien.glb';

const Alien = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
        
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="76204b749c104642981ab3237070744cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cube" position={[21.816, 97.813, 0]} />
                <group
                  name="Armature"
                  position={[21.816, 97.813, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.Outline}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <group name="Object_8" position={[21.816, 97.813, 0]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Alien;