"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


const Users =() =>{
  const [users, setUsers] = useState([])
  console.log(users)

  useEffect( ()=> {
    async function getUsers() {
      const data = await fetch ('https://dummyjson.com/users');
      setUsers(await data.json())

    }
    getUsers() ;
  }, [])


  return (
  <h1>
      {users && users.users && users.users.map((user) =>(
        <li key={user.id}>
            <Link href={`/user/${user.id}`}>{user.firstName} {user.lastName}</Link>
        </li>
      ))}

  </h1>
)
}

export default Users;