import axios from "axios";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";

export function Content() {
  const [studentInfo, setStudentInfo] = useState({});

  const handleStudentShow = () => {
    axios.get(`http://localhost:3000/students/${current_user.id}.json`).then((response) => {
      console.log(response.data);
      setStudentInfo(response.data);
    });
  };

  useEffect(handleStudentShow, []);

  return (
    <div>
      <h1>Student Portal</h1>
      <StudentShow studentInfo={studentInfo} />
    </div>
  );
}
