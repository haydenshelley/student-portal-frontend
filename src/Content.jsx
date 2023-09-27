import axios from "axios";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";

export function Content() {
  const [studentInfo, setStudentInfo] = useState({});
  const [isHide, setIsHide] = useState(true);

  const handleStudentShow = () => {
    axios
      .get(`http://localhost:3000/students/current.json`)
      .then((response) => {
        console.log(response.data);
        setStudentInfo(response.data);
      });
  };

  setTimeout(() => setIsHide(false), 1000);

  useEffect(handleStudentShow, []);

  return (
    <div>
      <LogoutLink />
      <h1>Student Portal</h1>
      {!isHide ? <StudentShow studentInfo={studentInfo} /> : null}
    </div>
  );
}
