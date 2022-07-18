import { useState } from "react";
import {
  Container,
  Content,
  GameContainer,
  WordBankContainer,
  Word,
} from "./styles";
import { wordBank } from "../../constants/wordBank";
import { Fade } from "../fade";
import { Input } from "../input";

export const Game = () => {
  const [words, setWords] = useState(wordBank);

  return (
    <Container>
      <Content>
        <GameContainer>
          <Input />
          <WordBankContainer>
            <Fade />
            {words.map((word, index) => (
              <Word key={index}>{word}</Word>
            ))}
          </WordBankContainer>
        </GameContainer>
      </Content>
    </Container>
  );
};
