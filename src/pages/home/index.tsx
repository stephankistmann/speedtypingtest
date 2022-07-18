import { Container, SummaryContainer, Summary } from "./styles";
import { Game } from "../../components/game";
import { Spacing } from "../../components/spacing";

export const Home = () => {
  return (
    <Container>
      <SummaryContainer>
        <Summary>
          This is a speed typing test! You'll be prompted to type a sentence,
          and you'll be given a timer to type the sentence.
        </Summary>
        <Summary>The result will be displayed after the time ends.</Summary>
      </SummaryContainer>
      <Spacing height="4rem" />
      <Game />
    </Container>
  );
};
