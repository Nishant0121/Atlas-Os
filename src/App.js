import "./App.css";
import { Land } from "./pages/land.js";
import { Home } from "./pages/home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cam } from "./app/cam.js";

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
