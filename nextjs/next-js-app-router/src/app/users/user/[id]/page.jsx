export default async function User({ params }) {
  const id = await params.id;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  console.log(user);
  return (
    <>
      <div className="bg-black text-white p-2 mx-2">
        <ul>
          <li>username: {user.username}</li>
          <li>email: {user.email}</li>
          <li>phone: {user.phone}</li>
        </ul>
      </div>
    </>
  );
}
