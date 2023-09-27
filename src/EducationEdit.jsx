export function EducationEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEducation(props.education.id, params, () =>
      event.target.reset()
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          University:
          <input
            defaultValue={props.education.university_name}
            name="university_name"
            type="text"
          />
        </div>
        <div>
          Degree:
          <input
            defaultValue={props.education.degree}
            name="degree"
            type="text"
          />
        </div>
        <div>
          Start Date:
          <input
            defaultValue={props.education.start_date}
            name="start_date"
            type="text"
          />
        </div>
        <div>
          End Date:
          <input
            defaultValue={props.education.end_date}
            name="end_date"
            type="text"
          />
        </div>
        <div>
          Details:
          <input
            defaultValue={props.education.details}
            name="details"
            type="text"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
