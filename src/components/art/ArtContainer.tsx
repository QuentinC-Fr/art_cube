import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";

function Box() {
  const mesh = useRef();
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial attachArray="material" />
      <meshStandardMaterial attachArray="material" />
      <meshStandardMaterial attachArray="material" />
      <meshStandardMaterial attachArray="material" />
      <meshStandardMaterial attachArray="material" />
      <meshStandardMaterial attachArray="material" />
    </mesh>
  );
}

const ArtContainer = () => {
  return (
    <Canvas
      camera={{ position: [-8, 4, -8], far: 50 }}
      style={{
        background: "#fff",
      }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  );
};

export default ArtContainer;
