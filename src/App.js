import "./App.css";
import { Land } from "./pages/land";
import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cam } from "./app/cam";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/cam" element={<Cam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
