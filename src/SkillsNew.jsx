export function SkillsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSkill(params, () => event.target.reset()); 
  };

  return (
    <div>
      <h1>New Skill</h1>
      <form onSubmit={handleSubmit}>
        <div>
          skill_name: <input name="skill_name" type="text" />
        </div>
        <button type="submit">Create Skill</button>
      </form>
    </div>
  );
}