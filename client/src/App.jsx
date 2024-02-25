import "./App.css";
import Contato from "./components/contato/contato";
import Header from "./components/header/header";
import Inicio from "./components/inicio/inicio";

function App() {
  return (
    <div className="app">
      <Header />
      <Inicio />
      <Contato />
    </div>
  );
}

export default App;
