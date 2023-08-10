import { useState } from "react";

const UserInput = (props) => {

  const [input, setInput] = useState('');

  const processUserInput = () => {
    const inputArray = input.split(/(\s+)/);
    const verb = inputArray[0];
    const object = inputArray[2];

    const actionMatrix = {
      'go': {
        'east': () => {
          console.log('i am going east');
          props.setPosition((prevState) => {
            return {...prevState, y: (prevState.y + 1)};
          });
        },
        'west': () => {
          console.log('i am going west');
        }
      },
    };

    console.log('inputArray', inputArray);
    actionMatrix[verb][object]();

    // if (verb === 'go') {
    //   // handling movement
    //   if (object === 'east') {

    //   }
    // } if (verb === 'get') {
    //   // handling picking things up
    //   console.log('get not yet implemented');      
    // } else {
    //   console.log('unrecognized verb');
    // }
  };

  //
  return (
    <div>
      <label htmlFor="in">What Next?</label>
      <input
        id="in"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <button onClick={processUserInput}>Go!</button>
    </div>
  );
};

export default UserInput;