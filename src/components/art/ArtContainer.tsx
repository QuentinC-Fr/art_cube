import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Euler, Vector3 } from "three";
import { textRepartition } from "../../helpers/helperTextRepartition";

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
  maxWidth = 180,
  maxHeight = 200,
  children,
  color = "#fff",
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
}) => {
  const lineHeight = 0.75;
  const letterSpacing = 0;
  const fontSize = 10;
  const textAlign = "justify";
  return (
    <mesh position={position} rotation={rotation}>
      <Text
        whiteSpace={"normal"}
        maxWidth={maxWidth}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontSize={fontSize}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        textAlign={textAlign}
        fillOpacity={1}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      >
        {children}
      </Text>
    </mesh>
  );
};

interface CustomInnerTextBoxProps {
  text?: string[];
}
const InnerTextBox: React.FunctionComponent<CustomInnerTextBoxProps> = ({
  text = [],
}) => {
  const repartition = textRepartition(text, 5);

  return (
    <mesh>
      {/* Left */}
      <CustomText
        rotation={new Euler(0, Math.PI / 2, 0)}
        position={new Vector3(0, 0, 0)}
      >
        {repartition[0]}
      </CustomText>
      {/* Back */}
      <CustomText
        rotation={new Euler(0, 0, 0)}
        position={new Vector3(100, 0, -100)}
      >
        {repartition[1]}
      </CustomText>
      {/* Right */}
      <CustomText
        rotation={new Euler(0, Math.PI + Math.PI / 2, 0)}
        position={new Vector3(200, 0, 0)}
      >
        {repartition[2]}
      </CustomText>
      {/* Top  */}
      <CustomText
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={new Vector3(100, 100, 0)}
      >
        {repartition[3]}
      </CustomText>
      {/* Bot  */}
      <CustomText
        rotation={new Euler(Math.PI + Math.PI / 2, 0, 0)}
        position={new Vector3(100, -100, 0)}
      >
        {repartition[4]}
      </CustomText>
    </mesh>
  );
};

interface CustomOuterTextBoxProps {
  text?: string[];
}
const OuterTextBox: React.FunctionComponent<CustomOuterTextBoxProps> = ({
  text = [],
}) => {
  const repartition = textRepartition(text, 4);
  console.log(repartition[0], repartition[0].length);
  return (
    <mesh>
      {/* Left */}
      <CustomText
        rotation={new Euler(0, Math.PI + Math.PI / 2, 0)}
        position={new Vector3(-0.2, 0, 0)}
      >
        {repartition[0]}
      </CustomText>
      {/* Right */}
      <CustomText
        rotation={new Euler(0, Math.PI / 2, 0)}
        position={new Vector3(200.2, 0, 0)}
      >
        {repartition[1]}
      </CustomText>
      {/* Top  */}
      <CustomText
        rotation={new Euler(Math.PI + Math.PI / 2, 0, 0)}
        position={new Vector3(100, 100.2, 0)}
      >
        {repartition[2]}
      </CustomText>
      {/* Bot  */}
      <CustomText
        rotation={new Euler(Math.PI / 2, 0, 0)}
        position={new Vector3(100, -100.2, 0)}
      >
        {repartition[3]}
      </CustomText>
    </mesh>
  );
};

interface CustomCubeProps {
  cities?: ICity[];
}

const Cube: React.FunctionComponent<CustomCubeProps> = ({ cities = [] }) => {
  const myCities = cities
    .filter((city) => city.mine)
    .map((city) => city.cityName);
  const otherCities = cities
    .filter((city) => !city.mine)
    .map((city) => city.cityName);
  return (
    <mesh position={[-100, 0, 0]}>
      <Box height={200} width={200} />
      <InnerTextBox text={otherCities} />
      <OuterTextBox text={myCities} />
    </mesh>
  );
};

const ArtContainer = () => {
  const cities: ICity[] = useSelector(
    (state: CityState) => state.cities,
    shallowEqual
  );

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
      <Cube cities={cities} />
    </Canvas>
  );
};

export default ArtContainer;
