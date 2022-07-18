import { CustomButton } from "./styles";

interface IButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ text, onClick }) => {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
};
