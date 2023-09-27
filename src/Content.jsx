import axios from "axios";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";
import { Modal } from "./Modal";
import { EducationEdit } from "./EducationEdit";

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
    setCurrentEducation(education);
    console.log(education);
  };

  const handleUpdateEducation = (id, params) => {
    console.log("handleUpdateEducation", params);
    axios.patch(`http://localhost:3000/educations/${id}.json`, params);
    window.location.reload();
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
      {!isHide ? (
        <StudentShow
          studentInfo={studentInfo}
          onShowEducation={handleShowEducation}
        />
      ) : null}
      <Modal show={isEducationShowVisible} onClose={handleClose}>
        <EducationEdit
          education={currentEducation}
          onUpdateEducation={handleUpdateEducation}
        />
      </Modal>
    </div>
  );
}
