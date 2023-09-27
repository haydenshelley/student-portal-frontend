import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from "./Content";
import { Login } from "./Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
