import axios from "axios";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";
import { Modal } from "./Modal";
import { EducationEdit } from "./EducationEdit";
import { SkillEdit } from "./SkillEdit";
import { CapstoneEdit } from "./CapstoneEdit";

export function Content() {
  const [studentInfo, setStudentInfo] = useState({});
  const [isHide, setIsHide] = useState(true);
  const [isEducationShowVisible, setisEducationShowVisible] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({});
  const [isSkillShowVisible, setisSkillShowVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState({});
  const [isCapstoneShowVisible, setisCapstoneShowVisible] = useState(false);
  const [currentCapstone, setCurrentCapstone] = useState({});

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

  const handleShowSkill = (skill) => {
    setisSkillShowVisible(true);
    setCurrentSkill(skill);
    console.log(skill);
  };

  const handleUpdateSkill = (id, params) => {
    console.log("handleUpdateSkill", params);
    axios.patch(`http://localhost:3000/skills/${id}.json`, params);
    window.location.reload();
  };

  const handleShowCapstone = (capstone) => {
    setisCapstoneShowVisible(true);
    setCurrentCapstone(capstone);
    console.log(capstone);
  };

  const handleUpdateCapstone = (id, params) => {
    console.log("handleUpdateCapsone", params);
    axios.patch(`http://localhost:3000/capstones/${id}.json`, params);
    window.location.reload();
  };

  const handleClose = () => {
    setisEducationShowVisible(false);
    setisSkillShowVisible(false);
    setisCapstoneShowVisible(false);
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
          onShowSkill={handleShowSkill}
          onShowCapstone={handleShowCapstone}
        />
      ) : null}
      <Modal show={isEducationShowVisible} onClose={handleClose}>
        <EducationEdit
          education={currentEducation}
          onUpdateEducation={handleUpdateEducation}
        />
      </Modal>
      <Modal show={isSkillShowVisible} onClose={handleClose}>
        <SkillEdit skill={currentSkill} onUpdateSkill={handleUpdateSkill} />
      </Modal>
      <Modal show={isCapstoneShowVisible} onClose={handleClose}>
        <CapstoneEdit
          capstone={currentCapstone}
          onUpdateCapstone={handleUpdateCapstone}
        />
      </Modal>
    </div>
  );
}
