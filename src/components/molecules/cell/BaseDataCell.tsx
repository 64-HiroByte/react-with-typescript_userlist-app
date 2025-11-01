import type { FC } from "react";

import type { UserType } from "../../../types/user";
import { TABLE_BORDER, TB_PRELINE } from "../../../styles/style";

export const BaseDataCell: FC<{ user: UserType }> = ({ user }) => (
  <>
    <td className={TABLE_BORDER}>{user.name}</td>
    <td className={TABLE_BORDER}>{user.role}</td>
    <td className={TABLE_BORDER}>{user.email}</td>
    <td className={TABLE_BORDER}>{user.age}</td>
    <td className={TABLE_BORDER}>{user.postCode}</td>
    <td className={TABLE_BORDER}>{user.phone}</td>
    <td className={TB_PRELINE}>{user.hobbies.join("\n")}</td>
    <td className={TABLE_BORDER}>{user.url}</td>
  </>
);
