import axios from "axios";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";
import { Modal } from "./Modal";
import { ExperienceNew } from "./ExperienceNew";
import { SkillsNew } from "./SkillsNew";
import { CapstonesNew } from "./CapstonesNew"; 
import { EducationsNew } from "./EducationsNew"; 

export function Content() {
  const [studentInfo, setStudentInfo] = useState({});
  const [isHide, setIsHide] = useState(true);
  const [isEducationShowVisible, setisEducationShowVisible] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [capstones, setCapstones] = useState([]); 
  const [educations, setEducations] = useState([]); 


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

  const handleCreateExperience = (params, successCallback) => { 
    axios.post("http://localhost:3000/experiences.json", params).then((response) => {
      setExperiences([...experiences, response.data]); 
      window.location.reload()
    });
  };

   const handleCreateSkill = (params, successCallback) => { 
    axios.post("http://localhost:3000/skills.json", params).then((response) => {
      setSkills([...skills, response.data]); 
      window.location.reload()
    });
  };

  const handleCreateCapstone = (params, successCallback) => { 
    axios.post("http://localhost:3000/capstones.json", params).then((response) => {
      setCapstones([...capstones, response.data]); 
      window.location.reload()
    });
  };

  const handleCreateEducation= (params, successCallback) => { 
    axios.post("http://localhost:3000/educations.json", params).then((response) => {
      setEducations([...educations, response.data]); 
      window.location.reload()
    });
  };

  return (
    <div>
      <LogoutLink />
      <h1>Student Portal</h1>
      {!isHide ? <StudentShow studentInfo={studentInfo} /> : null}
      <Modal show={isEducationShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
      < ExperienceNew onCreateExperience ={handleCreateExperience}/> 
      < SkillsNew onCreateSkill ={handleCreateSkill}/>
      < CapstonesNew onCreateCapstone = {handleCreateCapstone} />
      < EducationsNew onCreateEducation = {handleCreateEducation} /> 
    </div>
  );
}
