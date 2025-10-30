import type { FC } from "react";
import { USER_LIST } from "../data/userList";
import type { Student } from "../types/user";
import { TABLE_BORDER } from "../styles/style";
import { CommonHeader } from "./header/CommonHeader";
import { StudentHeader } from "./header/StudentHeader";
import { StudentRow } from "./row/StudentRow";

export const StudentList: FC = () => {
  const students = USER_LIST.filter((u): u is Student => u.role === "student");

  return (
    <table className={`table-auto border-collapse ${TABLE_BORDER}`}>
      <thead>
        <tr className={`bg-gray-200 ${TABLE_BORDER}`}>
          <CommonHeader />
          <StudentHeader />
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow key={student.id} user={student} />
        ))}
      </tbody>
    </table>
  );
};
