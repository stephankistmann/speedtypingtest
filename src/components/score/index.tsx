import { Container, TextContainer, Text } from "./styles";

interface IScoreProps {
  cpm: number;
  wpm: number;
  accuracy: number;
  timer: number;
}

export const Score: React.FC<IScoreProps> = ({ cpm, wpm, accuracy, timer }) => {
  return (
    <Container>
      <TextContainer>
        <Text>Time left: {timer}</Text>
      </TextContainer>
      <TextContainer>
        <Text>CPM: {cpm}</Text>
      </TextContainer>
      <TextContainer>
        <Text>WMP: {wpm}</Text>
      </TextContainer>
      <TextContainer>
        <Text>Accuracy: {accuracy}%</Text>
      </TextContainer>
    </Container>
  );
};
