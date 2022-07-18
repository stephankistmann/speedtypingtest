import { ChangeEvent, useState, useEffect } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import {
  Container,
  Content,
  GameContainer,
  WordBankContainer,
  Word,
  ButtonContainer,
  GameOverContainer,
} from "./styles";
import { wordBank } from "../../constants/wordBank";
import { Fade } from "../fade";
import { Input } from "../input";
import { Score } from "../score";
import { GameOver } from "./gameOver";
import { Button } from "../button";
import { Spacing } from "../spacing";

export const Game = () => {
  const [words, setWords] = useState(wordBank);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [gameOver, setGameOver] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [start, setStart] = useState(false);
  const [error, setError] = useState<any>({});
  const [input, setInput] = useState("");
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);

  const countdown = useCountdown(start);

  useEffect(() => {
    if (countdown === 0) {
      setGameOver(true);
    }
  }, [countdown]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!start) setStart(true);
    const currentValue = e.target.value.trim();
    const valueLength = currentValue.length;

    setInput(currentValue);
    setError({ ...error, [currentWord]: false });

    if (currentWord[valueLength - 1] !== currentValue[valueLength - 1]) {
      setError({ ...error, [currentWord]: true });
    }
  };

  const handleOnSpacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      setWordCount(wordCount + 1);
      setCpm(cpm + input.length);

      if (currentWord === input) {
        setWpm(cpm / 5);
      } else {
        setError({ ...error, [currentWord]: true });
      }

      const hits = Object.values(error).filter(
        (value) => value === false
      ).length;

      const acc = Math.round((hits / (wordCount + 1)) * 100);

      const slicedWords = words.slice(1);

      setWords(slicedWords);
      setCurrentWord(words[1]);
      setInput("");
      if (acc > 0) {
        setAccuracy(acc);
      }

      if (words.length === 0) {
        setGameOver(true);
        return;
      }
    }
  };

  const handleReset = () => {
    setCpm(0);
    setWordCount(0);
    setWords(wordBank.sort(() => Math.random() - 0.5));
    setCurrentWord(words[0]);
    setError({});
    setInput("");
    setStart(false);
    setAccuracy(0);
    setGameOver(false);
  };

  return (
    <Container>
      {!gameOver ? (
        <Content>
          <Score accuracy={accuracy} cpm={cpm} wpm={wpm} timer={countdown} />
          <GameContainer>
            <Input
              isErrored={error[currentWord]}
              value={input}
              onChange={(e) => handleInputChange(e)}
              onKeyUp={(e) => handleOnSpacePress(e)}
            />
            <WordBankContainer>
              <Fade />
              {words.map((word, index) => (
                <Word isFirstItem={index === 0} key={index}>
                  {word}
                </Word>
              ))}
            </WordBankContainer>
          </GameContainer>
        </Content>
      ) : (
        <GameOverContainer>
          <GameOver cpm={cpm} wpm={wpm} accuracy={accuracy} />
          <Spacing height="2rem" />
          <ButtonContainer>
            <Button onClick={handleReset} text="Play again" />
          </ButtonContainer>
        </GameOverContainer>
      )}
    </Container>
  );
};
