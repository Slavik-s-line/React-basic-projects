import { useState } from 'react';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();

    const userData = {
      username: data.username,
      password: data.password,
    };

    alert(JSON.stringify(userData));
  }

  function handleInputChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(event) => handleInputChange(event, 'username')}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={data.password}
            onChange={(event) => handleInputChange(event, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
