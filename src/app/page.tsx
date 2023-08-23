"use client";

import StyledButton from "@/components/StyledButton/StyledButton";
import styles from "./page.module.css";
import StyledLink from "@/components/StyledLink/StyledLink";
import { useUserContext } from "@/contexts/userContext";

export default function Page() {
  const { user, setUser } = useUserContext();

  if (!user) {
    return (
      <div className={styles.container}>
        <h2>Fall 2023</h2>
        <h1>WDD Student Portal</h1>
        <StyledLink text="Sign In" href="/signin" />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h2>Fall 2023</h2>
      <h1>WDD Student Portal</h1>
      <StyledLink href="/grades" text="Grades" />
      <StyledLink href="/curriculum" text="Curriculum" />
      <StyledLink href="/assignments" text="Assignments" />
    </div>
  );
}
