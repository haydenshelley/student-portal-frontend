export function CapstoneEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCapstone(props.capstone.id, params, () =>
      event.target.reset()
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input defaultValue={props.capstone.name} name="name" type="text" />
        </div>
        <div>
          Description:
          <input
            defaultValue={props.capstone.description}
            name="description"
            type="text"
          />
        </div>
        <div>
          URL:
          <input defaultValue={props.capstone.url} name="url" type="text" />
        </div>
        <div>
          Screenshot:
          <input
            defaultValue={props.capstone.screenshot}
            name="screenshot"
            type="text"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
