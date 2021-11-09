import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { shallowEqual, useSelector } from "react-redux";
import { Euler, Vector3 } from "three";

const Wall = ({
  height = 200,
  width = 200,
  position,
  rotation,
}: {
  height: number;
  width: number;
  position: Vector3;
  rotation: Euler;
}) => {
  const inverse_rotation =
    rotation.x !== 0
      ? new Euler(rotation.x + Math.PI, rotation.y, rotation.z)
      : rotation.z !== 0
      ? new Euler(rotation.x, rotation.y, rotation.z + Math.PI)
      : new Euler(rotation.x, rotation.y + Math.PI, rotation.z);
  return (
    <mesh position={position}>
      <mesh rotation={rotation} position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[height, width]} />
        <meshPhongMaterial attach="material" color="black" />
      </mesh>
      <mesh rotation={inverse_rotation} position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[height, width]} />
        <meshPhongMaterial attach="material" color="black" />
      </mesh>
    </mesh>
  );
};

const Box = ({
  height = 200,
  width = 200,
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
}) => {
  return (
    <mesh position={position} rotation={rotation}>
      {/*  Right*/}
      <Wall
        height={height}
        width={width}
        position={new Vector3(height + 0.1, 0, 0)}
        rotation={new Euler(0, Math.PI + Math.PI / 2, 0)}
      />
      {/* Left */}
      <Wall
        height={height}
        width={width}
        position={new Vector3(-0.1, 0, 0)}
        rotation={new Euler(0, Math.PI / 2, 0)}
      />
      {/* Back */}
      <Wall
        height={height}
        width={width}
        position={new Vector3(height / 2 + 0.1, 0, -(height / 2 + 0.1))}
        rotation={new Euler(0, 0, 0)}
      />
      {/* Bot */}
      <Wall
        height={height}
        width={width}
        position={new Vector3(height / 2, -(height / 2 + 0.1), 0)}
        rotation={new Euler(Math.PI + Math.PI / 2, 0, 0)}
      />
      {/* Top */}
      <Wall
        height={height}
        width={width}
        position={new Vector3(height / 2, height / 2 + 0.1, 0)}
        rotation={new Euler(Math.PI / 2, 0, 0)}
      />
    </mesh>
  );
};

interface CustomTextProps {
  maxWidth?: number;
  maxHeight?: number;
  children?: any;
  color?: string;
  rotation?: Euler;
  position?: Vector3;
}

const CustomText: React.FunctionComponent<CustomTextProps> = ({
  maxWidth = 200,
  maxHeight = 200,
  children,
  color = "#fff",
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
}) => {
  const lineHeight = 0.75;
  const letterSpacing = 0;
  const fontSize = 8;
  const textAlign = "justify";
  return (
    <mesh position={position} rotation={rotation}>
      <Text
        maxWidth={maxWidth}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontSize={fontSize}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        textAlign={textAlign}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      >
        {children}
      </Text>
    </mesh>
  );
};

const InnerTextBox = () => {
  return (
    <mesh>
      {/* Left */}
      <CustomText
        rotation={new Euler(0, Math.PI / 2, 0)}
        position={new Vector3(0, 0, 0)}
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
        TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
        VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
        COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE
        VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT
        OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT
        MOLLIT ANIM ID EST LABORUM.
      </CustomText>
      {/* Back */}
      <CustomText
        rotation={new Euler(0, 0, 0)}
        position={new Vector3(100, 0, -100)}
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
        TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
        VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
        COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE
        VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT
        OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT
        MOLLIT ANIM ID EST LABORUM.
      </CustomText>
      {/* Right */}
      <CustomText
        rotation={new Euler(0, Math.PI + Math.PI / 2, 0)}
        position={new Vector3(200, 0, 0)}
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
        TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
        VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
        COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE
        VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT
        OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT
        MOLLIT ANIM ID EST LABORUM.
      </CustomText>
      {/* Top  */}
      <CustomText
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={new Vector3(100, 100, 0)}
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
        TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
        VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
        COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE
        VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT
        OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT
        MOLLIT ANIM ID EST LABORUM.
      </CustomText>
      {/* Bot  */}
      <CustomText
        rotation={new Euler(Math.PI + Math.PI / 2, 0, 0)}
        position={new Vector3(100, -100, 0)}
      >
        1391 characters max
      </CustomText>
    </mesh>
  );
};

function Cube() {
  return (
    <mesh position={[-100, 0, 0]}>
      <Box height={200} width={200} />
      <InnerTextBox />
    </mesh>
  );
}

const ArtContainer = () => {
  const cities: readonly ICity[] = useSelector(
    (state: CityState) => state.cities,
    shallowEqual
  );
  console.log(cities);

  return (
    <Canvas
      camera={{ position: [0, 0, 300], far: 2000 }}
      style={{
        background: "#fff",
      }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[0, 0, 0]} /> */}
      <Cube />
    </Canvas>
  );
};

export default ArtContainer;
