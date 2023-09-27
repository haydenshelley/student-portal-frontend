export function StudentShow(props) {
  return (
    <div>
      <h2>Your Info</h2>
      <p> {props.studentInfo.first_name} </p>
      <img src={props.studentInfo.photo} width="100" height="100"></img>
      <p> Email: {props.studentInfo.email} </p>
      <p> Bio: {props.studentInfo.bio} </p>
      <a href={props.studentInfo.linkedin}>Linkedin</a>
      <br />
      <a href={props.studentInfo.twitter}>Twitter</a>
      <br />
      <a href={props.studentInfo.personal_blog}>Blog</a>
      <br />
      <a href={props.studentInfo.github}>Github</a>
      <h2>Education</h2>
      {props.studentInfo.educations.map((education) => (
        <div key={education.id}>
          <p>University: {education.university_name}</p>
          <p>Degree: {education.degree}</p>
          <p>Start Date: {education.start_date}</p>
          <p>End Date: {education.end_date}</p>
          <p>Details: {education.details}</p>
          <button onClick={() => props.onShowEducation(education)}>Edit</button>
          <hr />
        </div>
      ))}
      <h2>Experience</h2>
      {props.studentInfo.experiences.map((experience) => (
        <div key={experience.id}>
          <p>Company: {experience.company}</p>
          <p>Degree: {experience.job}</p>
          <p>Start Date: {experience.start_date}</p>
          <p>End Date: {experience.end_date}</p>
          <p>Details: {experience.details}</p>
          <button onClick={() => props.onShowExperience(experience)}>Edit</button>
          <hr />
        </div>
      ))}
      <h2>Skills</h2>
      {props.studentInfo.skills.map((skill) => (
        <div key={skill.id}>
          <p>{skill.skill_name}</p>
          <button onClick={() => props.onShowSkill(skill)}>Edit</button>
          <hr />
        </div>
      ))}
      <h2>Capstones</h2>
      {props.studentInfo.capstones.map((capstone) => (
        <div key={capstone.id}>
          <p>{capstone.name}</p>
          <p>{capstone.description}</p>
          <a href={capstone.url}>Repo</a>
          <img src={capstone.screenshot} />
          <hr />
        </div>
      ))}
    </div>
  );
}
