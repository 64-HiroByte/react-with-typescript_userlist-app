import type { FC } from "react";

import { USER_LIST } from "../../data/userList";
import { findSupportedUsers } from "../../utils/findSupportedUsers";
import { BaseDataCell } from "../cell/BaseDataCell";

import type { UserType } from "../../types/user";

import { TABLE_BORDER, TB_PRELINE } from "../../styles/style";
import { isStudentUser } from "../../utils/typeGuards";

export const UserRow: FC<{ user: UserType }> = ({ user }) => {
  const supportedUsers = findSupportedUsers(user, USER_LIST);

  const STUDENT_EMPTY_COLS = 5;
  const MENTOR_EMPTY_COLS = 5;

  if (isStudentUser(user)) {
    // 生徒の場合
    return (
      <tr className={TABLE_BORDER}>
        <BaseDataCell user={user} />
        {/* Student */}
        <td className={TABLE_BORDER}>{user.studyMinutes}</td>
        <td className={TABLE_BORDER}>{user.taskCode}</td>
        <td className={TB_PRELINE}>{user.studyLangs.join("\n")}</td>
        <td className={TABLE_BORDER}>{user.score}</td>
        <td className={TB_PRELINE}>
          {supportedUsers.map((u) => u.name).join("\n ")}
        </td>
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
      <td className={TABLE_BORDER}>{user.experienceDays}</td>
      <td className={TB_PRELINE}>{user.useLangs.join("\n")}</td>
      <td className={TABLE_BORDER}>{user.availableStartCode}</td>
      <td className={TABLE_BORDER}>{user.availableEndCode}</td>
      <td className={TB_PRELINE}>
        {supportedUsers.map((u) => u.name).join("\n")}
      </td>
    </tr>
  );
};

const renderEmptyCells = (count: number, userId: number) => {
  return Array.from({ length: count }).map((_, i) => (
    <td key={`${userId}-${i}`} className={TABLE_BORDER}></td>
  ));
};
