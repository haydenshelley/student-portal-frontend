export function ExperienceEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExperience(props.experience.id, params, () =>
      event.target.reset()
    );
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        Company:
                  <input
            defaultValue={props.experience.company}
            name="company"
            type="text"
          />
        </div>
     
        <div>
          Start Date:
          <input
            defaultValue={props.experience.start_date}
            name="start_date"
            type="text"
          />
        </div>
        <div>
          End Date:
          <input
            defaultValue={props.experience.end_date}
            name="end_date"
            type="text"
          />
        </div>
        <div>
          Details:
          <input
            defaultValue={props.experience.details}
            name="details"
            type="text"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
