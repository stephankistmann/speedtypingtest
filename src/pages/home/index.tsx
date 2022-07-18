import { Container, Content, Summary } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Content>
        <Summary>
          This is a speed typing test! You'll be prompted to type a sentence,
          and you'll be given a timer to type the sentence.
        </Summary>
        <Summary>The result will be displayed after you finish typing.</Summary>
      </Content>
    </Container>
  );
};
