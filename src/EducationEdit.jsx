export function EducationEdit(props) {
  return (
    <div>
      <h2>Education</h2>
      {props.studentInfo.educations.map((education) => (
        <div key={education.id}>
          <p>University: {education.university_name}</p>
          <p>Degree: {education.degree}</p>
          <p>Start Date: {education.start_date}</p>
          <p>End Date: {education.end_date}</p>
          <p>Details: {education.details}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
