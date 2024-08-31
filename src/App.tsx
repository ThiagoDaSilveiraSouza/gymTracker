import { ModalsContainer } from "./components/ModalsContainer";
import { ModalsContextProvider } from "./contexts";
import { GlobalStyle } from "./globalStyle";
import { ExercisesPage } from "./pages";

function App() {
  return (
    <ModalsContextProvider>
      <GlobalStyle />
      <ExercisesPage />
      <ModalsContainer />
    </ModalsContextProvider>
  );
}

export default App;
