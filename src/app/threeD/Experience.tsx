import { Environment } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <Environment preset="city" />
      <mesh position-y={0.12}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
