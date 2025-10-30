import type { FC } from "react";

import { BaseDataCell } from "../cell/BaseDataCell";
import { StudentDataCell } from "../cell/StudentDataCell";
import { MentorDataCell } from "../cell/MentorDataCell";

import type { UserType } from "../../types/user";

import { isMentorUser, isStudentUser } from "../../utils/typeGuards";

import { TABLE_BORDER } from "../../styles/style";

type Props = {
  user: UserType;
  view: "all" | "student" | "mentor";
};

export const UserTableRow: FC<Props> = ({ user, view }) => {
  const STUDENT_EMPTY_COLS = 5;
  const MENTOR_EMPTY_COLS = 5;

  // 生徒の場合
  if (isStudentUser(user)) {
    return (
      <tr>
        <BaseDataCell user={user} />
        <StudentDataCell user={user} />

        {/* 全ユーザー表示の場合は、メンター欄を空欄にする */}
        {view === "all" && renderEmptyCells(MENTOR_EMPTY_COLS, user.id)}
      </tr>
    );
  }

  // メンターの場合
  if (isMentorUser(user)) {
    return (
      <tr>
        <BaseDataCell user={user} />

        {/* 全ユーザー表示の場合は、生徒欄を空欄にする */}
        {view === "all" && renderEmptyCells(STUDENT_EMPTY_COLS, user.id)}

        <MentorDataCell user={user} />
      </tr>
    );
  }
  return null;
};

const renderEmptyCells = (count: number, userId: number) => {
  return Array.from({ length: count }).map((_, i) => (
    <td key={`${userId}-${i}`} className={TABLE_BORDER}></td>
  ));
};
