import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { theme } from "./theme";
import "./reset.css";
import "./index.css";
import { MainProvider } from "./context/MainProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainProvider>
        <div className="App">
          <Header />
          <Main />
        </div>
      </MainProvider>
    </ThemeProvider>
  );
}

export default App;
