import { useEffect, useId, useState } from "react";
import "./App.css";
import Getusers from "./Getusers";
import Getuser from "./Getuser";
import Createuser from "./Createuser";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { fetchUser, fetchUsers } from "./api/api";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [singleUser, setSingleUserData] = useState("");

  const { mutate } = useMutation({
    mutationFn: fetchUser,
    onMutate: () => {
      return { id: 1 };
    },
    onSuccess: (response) => {
      setSingleUserData(response.data);
      QueryClient.invalidateQueries({
        queryKey: ["data"],
      });
    },
  });

  const { data: usersData, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchUsers,
  });

  function handleClick(userId) {
    mutate({ userId });
  }

  return (
    <>
      <div>
        <p className="mb-4 text-xl font-bold underline">Get Particular User</p>

        <input
          className="border outline-0"
          type="numer"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          onClick={() => handleClick(inputValue)}
          className="bg-black p-2 ml-2 text-white"
        >
          Get User
        </button>
      </div>

      {/* single user */}

      {singleUser && singleUser.id ? (
        <>
          {" "}
          <Getuser data={singleUser}></Getuser>{" "}
        </>
      ) : (
        <p>user not found</p>
      )}

      {/* multiple user */}
      <p className="mb-4 text-xl font-bold underline">All users</p>

      {isLoading && <p>Loading.....</p>}
      {usersData?.data && usersData?.data.length > 0 ? (
        <>
          <Getusers data={usersData.data}></Getusers>
        </>
      ) : (
        <p>no users found</p>
      )}

      <Createuser></Createuser>
    </>
  );
}

export default App;
