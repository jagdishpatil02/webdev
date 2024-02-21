const fetchUser = async (user) => {
  const response = await fetch(`https://reqres.in/api/users/${user.userId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const singleUserData = await response.json();
  return singleUserData;
};

const fetchUsers = async () => {
  const response = await fetch(`https://reqres.in/api/users?page=2`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const userData = await response.json();
  return userData;
};

export { fetchUser, fetchUsers };
