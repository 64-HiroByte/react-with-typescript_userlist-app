import type { FC } from "react";
import { CommonHeader } from "./header/CommonHeader";
import { StudentHeader } from "./header/StudentHeader";
import { MentorHeader } from "./header/MentorHeader";

type Props = { view: "all" | "student" | "mentor" };

export const UserTableHeader: FC<Props> = ({ view }) => {
  return (
    <thead>
      <tr className={`bg-gray-200`}>
        {/* 共通ヘッダー */}
        <CommonHeader />
        {/* student */}
        {view !== "mentor" && <StudentHeader />}
        {/* mentor */}
        {view !== "student" && <MentorHeader />}
      </tr>
    </thead>
  );
};
