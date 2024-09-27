import { ModalsContainer, SideMenu } from "./components";
import { GlobalStyle } from "./globalStyle";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes>
        <ModalsContainer />
        <SideMenu />
      </AppRoutes>
    </>
  );
}

export default App;
