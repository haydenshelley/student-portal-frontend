import axios from "axios";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";

export function Content() {
  const [studentInfo, setStudentInfo] = useState({});
  const [isHide, setIsHide] = useState(true);

  const handleStudentShow = () => {
    axios.get(`http://localhost:3000/students/1.json`).then((response) => {
      console.log(response.data);
      setStudentInfo(response.data);
    });
  };

  setTimeout(() => setIsHide(false), 1000);

  useEffect(handleStudentShow, []);

  return (
    <div>
      <h1>Student Portal</h1>
      {!isHide ? <StudentShow studentInfo={studentInfo} /> : null}
    </div>
  );
}
