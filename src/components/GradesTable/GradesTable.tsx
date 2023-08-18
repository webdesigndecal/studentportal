import { getStudentById } from "@/firebase/student";

export default function GradesTable() {
  type entryProps = {
    assignmentName: string;
    grade: number;
    total: number;
  };

  const TableEntry = (props: entryProps) => {
    return (
      <tr className="entry">
        <td className="tableText">{props.assignmentName}</td>
        <td className="tableText">{props.grade}</td>
        <td className="tableText">{props.total}</td>
      </tr>
    );
  };

  return (
    <div className="mask">
      <table className="table">
        <thead>
          <tr className="header">
            <th className="tableText">Assignment</th>
            <th className="tableText">Grade</th>
            <th className="tableText">Total</th>
          </tr>
        </thead>
        {/* {Object.entries(groups).map(([groupName, group]) => {
          return <TableEntry data={data} threshold={cpuThreshold} />;
        })} */}
      </table>
    </div>
  );
}
