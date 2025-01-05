"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const User = ({ params }) => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    const { id } = params;
    async function getUser(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUsers(await data.json());
    }
    getUser(id);
  }, [params.id]);

  return (
    <h1>
      <span>
        {user.firstName} {user.lastName}
      </span>
    </h1>
  );
};

export default User;
