"use client";

import StyledButton from "@/components/StyledButton/StyledButton";
import { useUserContext } from "@/providers/userContext";
import { getStudentById } from "@/firebase/student";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [studentId, setStudentId] = useState("");
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const handleSignIn = async () => {
    const student = await getStudentById(studentId);
    if (!student) {
      console.log("No student with that id!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(student));
    console.log("from local storage:", localStorage.getItem("user"));
    setUser(student);
    router.push("/");
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <h2>Enter your student ID</h2>
      <form>
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(event) => {
            setStudentId(event.target.value);
          }}
        />
        <StyledButton
          text="Sign in"
          type="button"
          onClick={() => handleSignIn()}
        />
      </form>
    </div>
  );
}
