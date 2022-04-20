import "./App.css";
import HomePage from "./pages/home/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContacUs from "./pages/contactus";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.contactus} element={<ContacUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
