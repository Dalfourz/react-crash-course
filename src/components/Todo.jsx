import "./Todo.css";


function Todo({title, onDelete}) {
  return (
    <div className="todo">
      <h2>{title}</h2>
        <p>{title}</p>
      <button onClick = {onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
