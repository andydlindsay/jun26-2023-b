import useToggle from '../hooks/useToggle';

const Toggle = () => {
  const {isOn, toggleState} = useToggle();

  return (
    <div>
      <h2>Toggle Component</h2>
      <button onClick={toggleState}>Click me!</button>

      { isOn && <h2>🌞</h2> }
      { !isOn && <h2>🌚</h2> }
    </div>
  );
};

export default Toggle;
