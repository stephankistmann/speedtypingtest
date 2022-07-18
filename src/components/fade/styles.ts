import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10%;
  background: -webkit-gradient(
    linear,
    left,
    right,
    color-stop(0%, transparent),
    color-stop(50%, var(--background))
  );
  background: -webkit-linear-gradient(left, transparent 0%, var(--background));
  background: -moz-linear-gradient(right, transparent 0%, var(--background));
  background: linear-gradient(to right, transparent 0%, var(--background) 100%);
`;
