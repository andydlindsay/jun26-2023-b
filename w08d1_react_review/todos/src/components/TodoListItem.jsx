// -----> TodoListItem     | isComplete  | task
import {useState} from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {

    // const [isComplete, setIsComplete] = useState(false);

    let isCompleteOutput = '🟩';
    let buttonText = 'Click to Finish';
    if (props.isComplete(props.id)) {
        isCompleteOutput = '✅';
        buttonText = 'Click to Undo';
    }

    return (
        <li>{props.task} ({props.id}) - {isCompleteOutput}<button onClick={() => {props.toggleComplete(props.id)}}>{buttonText}</button></li>
    );
};

export default TodoListItem;

TodoListItem.defaultProps = {
    task: 'do the laundry',
    id: 'fh646g6'
};