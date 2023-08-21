import GradesTable from "@/components/GradesTable/GradesTable";
import styles from "./page.module.css";

export default function Grades() {
  return (
    <div className={styles.container}>
      <GradesTable />
    </div>
  );
}
