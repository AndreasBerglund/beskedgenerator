import "./reset.css";
import "./index.css";
import { MainProvider } from "./context/MainProvider";
import { Layout } from "./Layout";

function App() {
  return (
    <MainProvider>
      <Layout />
    </MainProvider>
  );
}

export default App;
