export function ExperienceNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateExperience(params, () => event.target.reset()); 
  };

  return (
    <div>
      <h1>New Experience</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Start_date: <input name="start_date" type="text" />
        </div>
        <div>
          end_date: <input name="end_date" type="text" />
        </div>
        <div>
          job: <input name="job" type="text" />
        </div>
        <div>
          company: <input name="company" type="text" />
        </div>
        <div>
          details: <input name="details" type="text" />
        </div>
        <button type="submit">Create experience</button>
      </form>
    </div>
  );
}