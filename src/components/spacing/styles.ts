import styled from "styled-components";

interface IContainerProps {
  width?: number | string;
  height?: number | string;
}

export const Container = styled.div<IContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
