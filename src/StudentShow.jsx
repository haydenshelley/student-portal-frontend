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
          <p>{education.university_name}</p>
        </div>
      ))}
      <h2>Experience</h2>
      <h2>Skills</h2>
      <h2>Capstones</h2>
    </div>
  );
}
