import React,{useRef} from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { Sphere,OrbitControls} from "@react-three/drei";
import {pointsInner,pointsOuter} from './utils'
//?jsx
const Three = () => {
  return (
    <div className="relative">
      <Canvas 
      camera={{ position: [10, -7.5,-7.5 ] }}
      className="bg-[#101010]" style={{ height: "100vh" }}>
        <OrbitControls minDistance={10} maxDistance={20}  />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
       <PointCircle/>
      </Canvas>
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-medium text-neutral-200 text-5xl pointer-events-none">Muhammed Enes Özbunar</h1>
    </div>
  );
};

const PointCircle = () => {
    const ref = useRef()
    useFrame(({clock}) => {
        ref.current.rotation.z =clock.getElapsedTime()*0.03;
    })  
    return (
        <group ref={ref}>
    {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
    ))}
     {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
    ))}
        </group>
    );
};

const Point=({position , color})=> {
    return (
        <Sphere args={[0.1, 10, 10]} position={position}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.5}
          />
        </Sphere>
    );
};
export default Three;
