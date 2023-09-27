export function EducationsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateEducation(params, () => event.target.reset()); 
  };

  return (
    <div>
      <h1>New Education</h1>
      <form onSubmit={handleSubmit}>
        <div>
          university: <input name="university_name" type="text" />
        </div>
        <div>
          degree: <input name="degree" type="text" />
        </div>
        <div>
          start_date: <input name="start_date" type="text" />
        </div>
        <div>
          end_date: <input name="end_date" type="text" />
        </div>
        <div>
          details: <input name="details" type="text" />
        </div>
        <button type="submit">Create education</button>
      </form>
    </div>
  );
}