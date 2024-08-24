import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState(user);

  function handleFormSubmit(event) {
    event.preventDefault();

    setUser(newUser);
  }

  return (
    //   <button onClick={() => setUser(user === 'Slava' ? 'Vlad' : 'Slava')}>
    //     Chage user
    //   </button>

    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={newUser}
        onChange={(event) => setNewUser(event.target.value)}
      />
      <br />
      <button type="submit">Change user</button>
    </form>
  );
};

export default ChangeUser;
