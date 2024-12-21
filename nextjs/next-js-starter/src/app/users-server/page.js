export default async function UsersServer() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li key={user.id} className="p-4 bg-white shadow-sm text-black">
          {user.name} {user.email}
        </li>
      ))}
    </ul>
  );
}
