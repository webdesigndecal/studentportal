"use client";

import GradesTable from "@/components/GradesTable/GradesTable";
import styles from "./page.module.css";
import { useUserContext } from "@/providers/userContext";
import { redirect } from "next/navigation";

export default function Grades() {
  const { user, setUser } = useUserContext();
  if (!user) {
    redirect("/signin");
  }

  return (
    <div className={styles.container}>
      <GradesTable />
    </div>
  );
}
