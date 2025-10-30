import type { FC } from "react";
import { USER_LIST } from "../data/userList";
import type { Mentor } from "../types/user";
import { TABLE_BORDER } from "../styles/style";
import { CommonHeader } from "./header/CommonHeader";
import { MentorRow } from "./row/MentorRow";
import { MentorHeader } from "./header/MentorHeader";

export const MentorList: FC = () => {
  const mentors = USER_LIST.filter((u): u is Mentor => u.role === "mentor");

  return (
    <table className={`table-auto border-collapse ${TABLE_BORDER}`}>
      <thead>
        <tr className={`bg-gray-200 ${TABLE_BORDER}`}>
          <CommonHeader />
          <MentorHeader />
        </tr>
      </thead>
      <tbody>
        {mentors.map((mentor) => (
          <MentorRow key={mentor.id} user={mentor} />
        ))}
      </tbody>
    </table>
  );
};
