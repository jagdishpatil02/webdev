export default async function UsersServer() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();
  return (
    <div className="space-y-2 ">
      {response.map((data) => (
        <li key={data.id} className="bg-black p-4">
          <span>{data.name}</span>
        </li>
      ))}
    </div>
  );
}
