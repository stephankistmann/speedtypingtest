import styled from "styled-components";

export const CustomButton = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: var(--purple);
  color: var(--primary);
  border: none;
  :hover {
    background: var(--purpleHover);
  }
  &:focus {
    outline: none;
  }
`;
