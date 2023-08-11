import {useState} from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1); // 1
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const addSome = (amountToAdd) => {
    setCount(prev => prev + amountToAdd);
  };

  return [
    count,
    increment,
    decrement,
    addSome
  ];
};

export default useCounter;