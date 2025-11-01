import type { FC } from "react";

import type { UserType } from "../../../types/user";
import { TABLE_BORDER, TB_PRELINE } from "../../../styles/style";
import { isStudentUser } from "../../../utils/typeGuards";
import { findSupportedUsers } from "../../../utils/findSupportedUsers";
import { USER_LIST } from "../../../data/userList";

export const StudentDataCell: FC<{ user: UserType }> = ({ user }) => {
  const supportedUsers = findSupportedUsers(user, USER_LIST);

  if (!isStudentUser(user)) return null;

  return (
    <>
      <td className={TABLE_BORDER}>{user.studyMinutes}</td>
      <td className={TABLE_BORDER}>{user.taskCode}</td>
      <td className={TB_PRELINE}>{user.studyLangs.join("\n")}</td>
      <td className={TABLE_BORDER}>{user.score}</td>
      <td className={TB_PRELINE}>
        {supportedUsers.map((u) => u.name).join("\n ")}
      </td>
    </>
  );
};
