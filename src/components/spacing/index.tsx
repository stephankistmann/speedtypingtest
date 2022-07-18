import { Container } from "./styles";

interface ISpacingProps {
  height?: number | string;
  width?: number | string;
}

export const Spacing: React.FC<ISpacingProps> = ({ width, height }) => {
  return <Container width={width} height={height} />;
};
