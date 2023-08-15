import './App.css';
import {useReducer} from 'react';

// import TodoListItem from './components/TodoListItem';
// import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoList from './components/TodoList';

// Component               |  State      |    Props
// App                     |  todos      |
// --> Header              |             | fraction complete e.g. 7/10
// --> TodoList            |             |
// -----> TodoListItem     | isComplete  | task

function App() {

  const initialTodos = [
    {
      id: 'a45673hdf74',
      task: 'clear browser history'
    },
    {
      id: 'b45673hdf74',
      task: 'Take out the trash',  
    },
    {
      id: 'c45673hdf74',
      task: 'laundry / dish washing',  
    },
    {
      id: 'd32rfe43',
      task: "buy Baldur's Gate 3",  
    },
  ];

  const initialState = {
    todos: initialTodos,
    completedTodos: []
  };

  const reducer = (state, action) => { // action { type: <type-string>, data: <data-goes-here>} }

    if (action.type === 'REMOVE_TODO') {
      const todoId = action.data;
      const filteredTodos = state.completedTodos.filter((arrayValue) => todoId !== arrayValue);
      return {
        ...state,
        completedTodos: filteredTodos
      };
    }

    if (action.type === "ADD_TODO") {
      const todoId = action.data;
      const newCompletedTodos = [
        ...state.completedTodos,
        todoId
      ];
      return {
        ...state,
        completedTodos: newCompletedTodos
      };
    }

  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleComplete = (id) => {
    console.log(`toggleComplete runs with id=${id}`);
    if (state.completedTodos.includes(id)){
      console.log(`isComplete is true`);
      // remove
      return dispatch({ type: 'REMOVE_TODO', data: id});
    } else {
      console.log(`isComplete is false`);
      // add
      console.log('completedTodos', state.completedTodos);
      return dispatch({ type: 'ADD_TODO', data: id});
    }
  };

  const isComplete = (id) => {
    return (state.completedTodos.includes(id));
  };

  return (
    <div className="App">
      <Header numComplete={state.completedTodos.length} numTotal={state.todos.length} />
      <TodoList 
        todos={state.todos} 
        toggleComplete={toggleComplete} 
        isComplete={isComplete}
      />
    </div>
  );
}

export default App;
