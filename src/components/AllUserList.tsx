import type { FC } from "react";

import { USER_LIST } from "../data/userList";
import { CommonHeader } from "./header/CommonHeader";
import { TABLE_BORDER } from "../styles/style";
import { StudentHeader } from "./header/StudentHeader";
import { MentorHeader } from "./header/MentorHeader";
import { UserRow } from "./row/UserRow";

export const AllUserList: FC = () => {
  return (
    <table className={`table-auto border-collapse ${TABLE_BORDER}`}>
      <thead>
        <tr className={`bg-gray-200 ${TABLE_BORDER}`}>
          {/* 共通ヘッダー */}
          <CommonHeader />

          {/* student */}
          <StudentHeader />

          {/* mentor */}
          <MentorHeader />
        </tr>
      </thead>
      <tbody>
        {USER_LIST.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};
