import type { FC } from "react";
import type { Mentor, Student, UserType } from "../../types/user";
import { TABLE_BORDER, TB_PRELINE } from "../../styles/style";
import { USER_LIST } from "../../data/userList";

// 型ガード関数
const isStudentUser = (user: UserType): user is Student =>
  user.role === "student";

export const UserRow: FC<{ user: UserType }> = ({ user }) => {
  const supportedUsers = findSupportedUsers(user);

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

const BaseDataCell: FC<{ user: UserType }> = ({ user }) => (
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

const renderEmptyCells = (count: number, userId: number) => {
  return Array.from({ length: count }).map((_, i) => (
    <td key={`${userId}-${i}`} className={TABLE_BORDER}></td>
  ));
};

const findSupportedUsers = (user: UserType): UserType[] => {
  if (user.role === "student") {
    return USER_LIST.filter(
      (u): u is Mentor =>
        u.role === "mentor" &&
        u.availableStartCode <= user.taskCode &&
        u.availableEndCode >= user.taskCode
    );
  }

  if (user.role === "mentor") {
    return USER_LIST.filter(
      (u): u is Student =>
        u.role === "student" &&
        u.taskCode >= user.availableStartCode &&
        u.taskCode <= user.availableEndCode
    );
  }
  return [];
};
