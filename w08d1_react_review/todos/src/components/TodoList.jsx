import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {

  return (
    <ul>
      {props.todos.map((item, index) => {
        return <TodoListItem 
          key={index}
          id={item.id} 
          task={item.task} 
          toggleComplete={props.toggleComplete}
          isComplete={props.isComplete}
        />
      })}
    </ul>
  );
};

export default TodoList;

TodoList.defaultProps = {
  todos: [
    {
      id: 'fry7463f',
      task: 'feed the dog'
    },
    {
      id: 'r432433f',
      task: 'feed the cat'
    }
  ]
};