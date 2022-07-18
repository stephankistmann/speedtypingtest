import styled, { css } from "styled-components";

type ICustomInputProps = {
  isErrored: boolean;
};

export const CustomInput = styled.input<ICustomInputProps>`
  height: 1.5rem;
  width: 7rem;
  margin-right: 0.5rem;
  color: var(--background);
  &:focus {
    outline: none;
  }
  font-weight: 600;
  ${({ isErrored }) =>
    isErrored &&
    css`
      color: var(--danger);
    `}
`;
