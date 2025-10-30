import type { FC } from "react";
import type { UserType } from "../../types/user";
import { TABLE_BORDER } from "../../styles/style";
import { BaseDataCell } from "../cell/BaseDataCell";
import { MentorDataCell } from "../cell/MentorDataCell";

export const MentorRow: FC<{ user: UserType }> = ({ user }) => {
  return (
    <tr className={TABLE_BORDER}>
      <BaseDataCell user={user} />
      <MentorDataCell user={user} />
    </tr>
  );
};
