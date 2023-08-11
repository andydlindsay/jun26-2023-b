import {useState} from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  // const empty = () => {
  //   setValue('');
  // };

  return {
    value,
    onChange,
    // onBlur: empty
  };
};

export default useInput;