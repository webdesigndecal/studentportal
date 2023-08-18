"use client";

import StyledButton from "@/components/StyledButton/StyledButton";
import { User, useUserContext } from "@/contexts/userContext";
import { getStudentById } from "@/firebase/student";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [studentId, setStudentId] = useState("");
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const handleLogIn = async () => {
    const student = await getStudentById(studentId);
    console.log(student);
    if (!student) {
      console.log("No student with that id!");
      return;
    }
    const newUser = {
      studentId: student.studentId,
    } as User;
    setUser(newUser);
    router.push("/");
  };

  return (
    <div>
      <h1>Enter your student ID</h1>
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
          text="Log In"
          type="button"
          onClick={() => handleLogIn()}
        />
      </form>
    </div>
  );
}