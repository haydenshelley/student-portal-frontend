import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from "./Content";
import { Login } from "./Login";
// import { EducationEdit } from "./EducationEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="/educations/edit" element={<EducationEdit />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
