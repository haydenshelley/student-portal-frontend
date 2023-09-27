import axios from "axios";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";
import { Modal } from "./Modal";

export function Content() {
  const [studentInfo, setStudentInfo] = useState({});
  const [isHide, setIsHide] = useState(true);
  const [isEducationShowVisible, setisEducationShowVisible] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({});

  const handleStudentShow = () => {
    axios
      .get(`http://localhost:3000/students/current.json`)
      .then((response) => {
        console.log(response.data);
        setStudentInfo(response.data);
      });
  };

  const handleShowEducation = (education) => {
    setisEducationShowVisible(true);
    setCurrentEducation(response.data.educations);
  };

  const handleClose = () => {
    setisEducationShowVisible(false);
  };

  setTimeout(() => setIsHide(false), 1000);

  useEffect(handleStudentShow, []);

  return (
    <div>
      <LogoutLink />
      <h1>Student Portal</h1>
      {!isHide ? <StudentShow studentInfo={studentInfo} /> : null}
      <Modal show={isEducationShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
