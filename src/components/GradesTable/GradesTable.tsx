"use client";

import { useUserContext } from "@/providers/userContext";
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
  if (!user) {
    return (<div>
    <h1>Grades</h1>
    <p>There was an error loading your grades. Please try again later.</p>
  </div>
  )}

  const data = parseData(user.grades);
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
          {data.slice(0, 19).map((grade, index) => (
            <TableEntry
              key={index}
              assignmentName={index % 2 == 0 ? `Lab ${(Math.floor(index / 2)) + 1}`: `Homework ${Math.floor(index / 2) + 1}`}
              grade={grade}
              total={index % 2 == 0 ? 1 : 4}
            />))}
          {data.slice(19, 21).map((grade, index) => (
            <TableEntry
              key={index}
              assignmentName={index % 2 == 0 ? 'Midterm' : 'Final'}
              grade={grade}
              total={index % 2 == 0 ? 24 : 32}
            />))}
        </tbody>
      </table>
    </div>
  );
}

function parseData(grades: {[key: string]: number;}): number[] {
  const data = [
    grades.lab1, grades.hw1, 
    grades.lab2, grades.hw2, 
    grades.lab3, grades.hw3, 
    grades.lab4, grades.hw4, 
    grades.lab5, grades.hw5, 
    grades.lab6, grades.hw6, 
    grades.lab7, grades.hw7, 
    grades.lab8, grades.hw8, 
    grades.lab9, grades.hw9, 
    grades.lab10, grades.hw10, 
    grades.midterm, grades.final
  ];
  return data;
}