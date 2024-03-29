import { useRef } from "react";
import { useState } from "react";

function Createuser() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const nameRef = useRef();
  const jobRef = useRef();

  async function handlePostRequest() {
    setName(name);
    setJob(job);
    if (nameRef.current.value == "" || jobRef.current.value == "") {
      alert("enter name or value");
      return false;
    }
    let requestJson = {
      name: name,
      job: job,
    };
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestJson),
    });

    if (response.status == 201) {
      alert("User created successfully created");
    }
    setName("");
    setJob("");
  }

  return (
    <>
      <input
        ref={nameRef}
        type="text"
        value={name}
        className="border outline-0"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        ref={jobRef}
        type="text"
        value={job}
        className="border outline-0 ml-2"
        onChange={(e) => setJob(e.target.value)}
      />

      <button
        type="button"
        className="bg-black text-white p-2 ml-2"
        onClick={() => handlePostRequest()}
      >
        Create User
      </button>
    </>
  );
}

export default Createuser;
