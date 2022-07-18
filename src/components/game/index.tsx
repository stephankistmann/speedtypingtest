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
import { Score } from "../score";

export const Game = () => {
  const [words, setWords] = useState(wordBank);

  return (
    <Container>
      <Content>
        <Score accuracy={50} cpm={300} wpm={80} timer={60} />
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
