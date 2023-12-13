async function deleteUser(id) {
  const responseData = await fetch(`https://reqres.in/api/users/${id}`, {
    type: 'DELETE',
  });
  if (responseData.status == 200) {
    alert('User deleted successfully created');
  }
}

function Getusers(props) {
  return (
    <>
      <div className='flex justify-center items-center flex-wrap'>
        {props.data.map((user, index) => (
          <>
            <div
              className='w-1/3 flex justify-center items-center flex-col mb-4 p-4 '
              key={index}
            >
              <div className='shadow-md w-full flex justify-center items-center flex-col'>
                <div className='mb-2 font-bold'>
                  {user.first_name} {user.last_name}
                </div>
                <img src={user.avatar} className='mb-2' />
                <div>{user.email}</div>
                <button
                  onClick={() => deleteUser(user.id)}
                  className='p-2 bg-black text-white'
                >
                  Delete User
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Getusers;
