import useInput from "../hooks/useInput";

const Login = () => {
  const usernameInput = useInput('uncleJesse');
  const passwordInput = useInput('');

  const submitHandler = (event) => {
    event.preventDefault();

    alert(`You are trying to login in as ${usernameInput.value} with password ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>Login Form!</h2>

      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          {...passwordInput}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Login;