import "./App.css";
import { Land } from "./pages/land.js";
import { Home } from "./pages/home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cam } from "./app/cam.js";
import ModeContextProvider from "./contex.js";
import ImageRecognition from "./app/imgReco.js";

function App() {
  return (
    <div className="App">
      <ModeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Land />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/cam" element={<ImageRecognition />} />
          </Routes>
        </BrowserRouter>
      </ModeContextProvider>
    </div>
  );
}

export default App;
