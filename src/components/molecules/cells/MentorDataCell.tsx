import type { FC } from "react";

import type { UserType } from "../../../types/user";
import { findSupportedUsers } from "../../../utils/findSupportedUsers";
import { isMentorUser } from "../../../utils/typeGuards";
import { USER_LIST } from "../../../data/userList";
import { DataCell } from "../../atoms/cell/DataCell";

export const MentorDataCell: FC<{ user: UserType }> = ({ user }) => {
  const supportedUsers = findSupportedUsers(user, USER_LIST);

  if (!isMentorUser(user)) return null;

  return (
    <>
      <DataCell>{user.experienceDays}</DataCell>
      <DataCell>{user.useLangs.join("\n")}</DataCell>
      <DataCell>{user.availableStartCode}</DataCell>
      <DataCell>{user.availableEndCode}</DataCell>
      <DataCell>{supportedUsers.map((u) => u.name).join("\n")}</DataCell>
    </>
  );
};
