"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <>
      <h1>About</h1>Go to <button onClick={() => router.push("/")}>Home</button>
    </>
  );
}
