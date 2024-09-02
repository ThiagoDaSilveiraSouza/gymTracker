import { ModalsContainer, SideMenu } from "./components";
import { ModalsContextProvider } from "./contexts";
import { GlobalStyle } from "./globalStyle";
import { AppRoutes } from "./routes";

function App() {
  return (
    <ModalsContextProvider>
      <GlobalStyle />
      <AppRoutes>
        <ModalsContainer />
        <SideMenu />
      </AppRoutes>
    </ModalsContextProvider>
  );
}

export default App;
