import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/Global";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </>
  );
}

export default App;
