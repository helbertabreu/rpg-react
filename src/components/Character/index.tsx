import * as C from "./styles";
import { ICharacterSides } from "../../types/CharacterSides";

type IProps = {
  x: number;
  y: number;
  side: ICharacterSides;
};

export const Character = ({ x, y, side }: IProps) => {
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };
  return (
    <C.Container
      size={size}
      left={x * size}
      top={y * size}
      sidePosition={sides[side] ?? 0}
    ></C.Container>
  );
};
