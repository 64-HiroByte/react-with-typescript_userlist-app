import type { FC } from "react";

import { BaseDataCell } from "../cell/BaseDataCell";

import type { UserType } from "../../types/user";

import { TABLE_BORDER } from "../../styles/style";
import { isStudentUser } from "../../utils/typeGuards";
import { StudentDataCell } from "../cell/StudentDataCell";
import { MentorDataCell } from "../cell/MentorDataCell";

export const UserRow: FC<{ user: UserType }> = ({ user }) => {
  const STUDENT_EMPTY_COLS = 5;
  const MENTOR_EMPTY_COLS = 5;

  // 生徒の場合
  if (isStudentUser(user)) {
    return (
      <tr className={TABLE_BORDER}>
        <BaseDataCell user={user} />
        {/* Student */}
        <StudentDataCell user={user} />
        {/* Mentorに関するセルは空欄（5個） */}
        {renderEmptyCells(STUDENT_EMPTY_COLS, user.id)}
      </tr>
    );
  }

  // メンターの場合
  return (
    <tr className={TABLE_BORDER}>
      <BaseDataCell user={user} />
      {/* Studentに関するデータは空欄（5個） */}
      {renderEmptyCells(MENTOR_EMPTY_COLS, user.id)}
      {/* Mentor */}
      <MentorDataCell user={user} />
    </tr>
  );
};

const renderEmptyCells = (count: number, userId: number) => {
  return Array.from({ length: count }).map((_, i) => (
    <td key={`${userId}-${i}`} className={TABLE_BORDER}></td>
  ));
};
