import Link from "next/link";

export default async function User() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return (
    <>
      <div className=" text-white w-72">
        {users.map((user) => (
          <div className="my-2 bg-black p-2">
            <Link href={`/users/user/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
