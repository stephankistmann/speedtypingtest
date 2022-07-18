import { Container, Title, Content, Text, TextBold } from "./styles";

interface IGameOverProps {
  cpm: number;
  wpm: number;
  accuracy: number;
}

export const GameOver: React.FC<IGameOverProps> = ({ cpm, wpm, accuracy }) => {
  return (
    <Container>
      <Title>Game Over</Title>
      <Content>
        <Text>Your result was: </Text>
        <Text>CPM: </Text>
        <TextBold>{cpm} </TextBold>
        <Text>WPM: </Text>
        <TextBold>{wpm} </TextBold>
        <Text>Accuracy: </Text>
        <TextBold>{accuracy}%</TextBold>
      </Content>
    </Container>
  );
};
