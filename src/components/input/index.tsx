import { ChangeEvent } from "react";
import { CustomInput } from "./styles";

interface IInputProps {
  isErrored: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({
  isErrored,
  value,
  onChange,
  onKeyUp,
}) => {
  return (
    <CustomInput
      autoComplete="off"
      isErrored={isErrored}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
    />
  );
};
