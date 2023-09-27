export function SkillEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSkill(props.skill.id, params, () => event.target.reset());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Skill:
          <input
            defaultValue={props.skill.skill_name}
            name="skill_name"
            type="text"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
