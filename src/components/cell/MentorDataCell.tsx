import type { FC } from "react";

import type { UserType } from "../../types/user";
import { TABLE_BORDER, TB_PRELINE } from "../../styles/style";
import { findSupportedUsers } from "../../utils/findSupportedUsers";
import { isMentorUser } from "../../utils/typeGuards";
import { USER_LIST } from "../../data/userList";

export const MentorDataCell: FC<{ user: UserType }> = ({ user }) => {
  const supportedUsers = findSupportedUsers(user, USER_LIST);

  if (!isMentorUser(user)) return null;

  return (
    <>
      <td className={TABLE_BORDER}>{user.experienceDays}</td>
      <td className={TB_PRELINE}>{user.useLangs.join("\n")}</td>
      <td className={TABLE_BORDER}>{user.availableStartCode}</td>
      <td className={TABLE_BORDER}>{user.availableEndCode}</td>
      <td className={TB_PRELINE}>
        {supportedUsers.map((u) => u.name).join("\n")}
      </td>
    </>
  );
};
