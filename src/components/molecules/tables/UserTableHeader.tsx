import type { FC } from "react";
import { CommonHeader } from "../headers/CommonHeader";
import { StudentHeader } from "../headers/StudentHeader";
import { MentorHeader } from "../headers/MentorHeader";

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
