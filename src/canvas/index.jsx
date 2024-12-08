import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />

      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />

      {/* <CameraRig> */}
      {/* <Backdrop /> */}
      <group scale={[3.8, 3.8, 3.8]} position={[0, 0.25, 0]}>
        <Shirt />
      </group>
      {/* </CameraRig> */}
    </Canvas>
  );
};

export default CanvasModel;
