import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home/index";
import { Header } from "./components/header";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
};
