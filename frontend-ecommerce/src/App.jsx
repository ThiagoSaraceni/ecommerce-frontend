import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/navbar";
import { Rotas } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
