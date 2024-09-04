import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/navbar";
import { Home } from "./pages/home";
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
