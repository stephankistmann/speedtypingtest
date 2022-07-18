import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 37%;
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

type IWordProp = {
  isFirstItem: boolean;
};

export const Word = styled.span<IWordProp>`
  margin-right: 0.5rem;
  ${({ isFirstItem }) =>
    isFirstItem &&
    css`
      font-weight: bold;
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const GameOverContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
