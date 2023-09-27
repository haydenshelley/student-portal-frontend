export function CapstonesNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateCapstone(params, () => event.target.reset()); 
  };

  return (
    <div>
      <h1>New Capstone</h1>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name="name" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        <div>
          url: <input name="url" type="text" />
        </div>
        <div>
          screenshot: <input name="screenshot" type="text" />
        </div>
        <button type="submit">Create Capstone</button>
      </form>
    </div>
  );
}