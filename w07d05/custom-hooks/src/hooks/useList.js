import {useState} from 'react';

const useList = () => {
  const [list, setList] = useState([]);

  const addToList = (itemToAdd) => {
    const newList = [
      ...list,
      itemToAdd
    ];

    setList(newList);
  };

  const removeFromList = (itemToRemove) => {
    const filtered = list.filter((item) => { return item !== itemToRemove });
    setList(filtered);
  };

  const reset = () => {
    setList([]);
  };

  return {
    list,
    addToList,
    removeFromList,
    reset
  };
};

export default useList;
