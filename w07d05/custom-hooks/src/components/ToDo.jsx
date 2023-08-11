import useList from "../hooks/useList";
import useInput from "../hooks/useInput";

const ToDo = () => {
  const {list, addToList} = useList();
  const todoInput = useInput('');

  const mapped = list.map((el, index) => {
    return <p key={index}>{el}</p>;
  });

  const addTodoClick = () => {
    addToList(todoInput.value);
  };

  return (
    <div>
      <h2>ToDo Component</h2>

      <div>
        <label>New Todo:</label>
        <input 
          { ...todoInput }
        />
        <button onClick={addTodoClick}>Add Todo!</button>
      </div>

      { mapped }
    </div>
  );
};

export default ToDo;