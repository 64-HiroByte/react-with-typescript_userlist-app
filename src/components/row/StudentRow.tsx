import type { FC } from "react";

import { TABLE_BORDER } from "../../styles/style";
import { BaseDataCell } from "../cell/BaseDataCell";
import type { Student } from "../../types/user";
import { StudentDataCell } from "../cell/StudentDataCell";

export const StudentRow: FC<{ user: Student }> = ({ user }) => {
  return (
    <tr className={TABLE_BORDER}>
      <BaseDataCell user={user} />
      <StudentDataCell user={user} />
    </tr>
  );
};
