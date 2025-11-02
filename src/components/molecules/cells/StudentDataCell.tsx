import type { FC } from "react";

import type { UserType } from "../../../types/user";
import { isStudentUser } from "../../../utils/typeGuards";
import { findSupportedUsers } from "../../../utils/findSupportedUsers";
import { USER_LIST } from "../../../data/userList";
import { DataCell } from "../../atoms/cell/DataCell";

export const StudentDataCell: FC<{ user: UserType }> = ({ user }) => {
  const supportedUsers = findSupportedUsers(user, USER_LIST);

  if (!isStudentUser(user)) return null;

  return (
    <>
      <DataCell>{user.studyMinutes}</DataCell>
      <DataCell>{user.taskCode}</DataCell>
      <DataCell>{user.studyLangs.join("\n")}</DataCell>
      <DataCell>{user.score}</DataCell>
      <DataCell>{supportedUsers.map((u) => u.name).join("\n ")}</DataCell>
    </>
  );
};
