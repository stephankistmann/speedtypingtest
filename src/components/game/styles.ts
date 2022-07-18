import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WordBankContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Word = styled.span`
  margin-right: 0.5rem;
`;