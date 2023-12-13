import { useEffect, useState } from 'react';
import './App.css';
import Getusers from './Getusers';
import Getuser from './Getuser';
import Createuser from './Createuser';
function App() {
  const [users, setUsers] = useState({ data: [] });
  const [user, setSingleUser] = useState({ data: {} });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch('https://reqres.in/api/users?page=2')
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        });
    };

    fetchUsers();
  }, []);

  function getUser(value) {
    fetch(`https://reqres.in/api/users/${value}`)
      .then((res) => res.json())
      .then((user) => {
        setSingleUser(user.data);
        setInputValue('');
      });
  }
  console.log('user', user);

  return (
    <>
      <div>
        <p className='mb-4 text-xl font-bold underline'>Get Particular User</p>

        <input
          className='border outline-0'
          type='numer'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type='button'
          onClick={() => getUser(inputValue)}
          className='bg-black p-2 ml-2 text-white'
        >
          Get User
        </button>
      </div>

      {/* single user */}

      {user.id ? (
        <>
          {' '}
          <Getuser data={user}></Getuser>{' '}
        </>
      ) : (
        <p>user not found</p>
      )}

      {/* multiple user */}
      <p className='mb-4 text-xl font-bold underline'>All users</p>

      {users.data && users.data.length > 0 ? (
        <>
          <Getusers data={users.data}></Getusers>
        </>
      ) : (
        <p>no users found</p>
      )}

      <Createuser></Createuser>
    </>
  );
}

export default App;
