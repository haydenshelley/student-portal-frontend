import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from "./Content";
import { Login } from "./Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
