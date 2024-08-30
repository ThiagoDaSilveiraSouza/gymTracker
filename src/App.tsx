import { ModalsContainer } from "./components/ModalsContainer";
import { ModalsContextProvider } from "./contexts";
import { GlobalStyle } from "./globalStyle";
import { HomePage } from "./pages";

function App() {
  return (
    <ModalsContextProvider>
      <GlobalStyle />
      <HomePage />
      <ModalsContainer />
    </ModalsContextProvider>
  );
}

export default App;
