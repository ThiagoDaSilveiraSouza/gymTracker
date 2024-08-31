import { ModalsContainer } from "./components/ModalsContainer";
import { DataContextProvider, ModalsContextProvider } from "./contexts";
import { GlobalStyle } from "./globalStyle";
import { HomePage } from "./pages";

function App() {
  return (
    <DataContextProvider>
      <ModalsContextProvider>
        <GlobalStyle />
        <HomePage />
        <ModalsContainer />
      </ModalsContextProvider>
    </DataContextProvider>
  );
}

export default App;
