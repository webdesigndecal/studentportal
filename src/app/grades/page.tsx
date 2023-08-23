"use client";

import GradesTable from "@/components/GradesTable/GradesTable";
import styles from "./page.module.css";
import { useUserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

export default function Grades() {
  const { user, setUser } = useUserContext();
  console.log(user);
  const router = useRouter();
  if (!user) {
    console.log("THERE IS NO USER");
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <GradesTable />
    </div>
  );
}
