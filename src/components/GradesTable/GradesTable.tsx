"use client";

import { useUserContext } from "@/contexts/userContext";
import styles from "./GradesTable.module.css";

type entryProps = {
  assignmentName: string;
  grade: number;
  total: number;
};

const TableEntry = (props: entryProps) => {
  return (
    <tr className={styles.entry}>
      <td className={styles.tableText}>{props.assignmentName}</td>
      <td className={styles.tableText}>{props.grade}</td>
      <td className={styles.tableText}>{props.total}</td>
    </tr>
  );
};

export default function GradesTable() {
  const { user, setUser } = useUserContext();
  return (
    <div className={styles.mask}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.header}>
            <th className={styles.tableText}>Assignment</th>
            <th className={styles.tableText}>Grade</th>
            <th className={styles.tableText}>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(user!.grades).map((key) => (
            <TableEntry
              key={key}
              assignmentName={key}
              grade={user!.grades[key]}
              total={user!.grades[key]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
