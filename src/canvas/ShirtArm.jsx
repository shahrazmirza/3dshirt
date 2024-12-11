import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const ShirtArm = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked_arm.glb");

  const logoTexture = snap.logoDecal ? useTexture(snap.logoDecal) : null;
  const fullTexture = snap.fullDecal ? useTexture(snap.fullDecal) : null;

  if (logoTexture) logoTexture.anisotropy = 16;
  if (fullTexture) fullTexture.anisotropy = 16;

  useFrame((state, delta) => {
    if (materials.lambert1 && snap.color) {
      easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    }
  });

  return (
    <group>
      {nodes?.T_Shirt_male?.geometry && materials?.lambert1 && (
        <mesh
          castShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          material-roughness={1}
          dispose={null}
        >
          {snap.isFullTexture && fullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={2}
              map={fullTexture}
            />
          )}

          {snap.isLogoTexture && logoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
      )}
    </group>
  );
};

export default ShirtArm;
