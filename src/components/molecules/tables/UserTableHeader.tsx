import type { FC } from "react";
import { CommonHeader } from "../headers/CommonHeader";
import { StudentHeader } from "../headers/StudentHeader";
import { MentorHeader } from "../headers/MentorHeader";

type SortKey = "studyMinutes" | "score" | "experienceDays";
type SortOrder = "asc" | "desc";

type Props = {
  view: "all" | "student" | "mentor";
  onSort: (key: SortKey) => void;
  sortKey: SortKey | null;
  sortOrder: SortOrder;
};

export const UserTableHeader: FC<Props> = ({
  view,
  onSort,
  sortKey,
  sortOrder,
}) => {
  return (
    <thead>
      <tr className={`bg-gray-200`}>
        {/* 共通ヘッダー */}
        <CommonHeader />
        {/* student */}
        {view !== "mentor" && (
          <StudentHeader
            view={view}
            onSort={onSort}
            sortKey={sortKey as "studyMinutes" | "score" | null}
            sortOrder={sortOrder}
          />
        )}
        {/* mentor */}
        {view !== "student" && (
          <MentorHeader
            view={view}
            onSort={onSort}
            sortKey={sortKey as "experienceDays" | null}
            sortOrder={sortOrder}
          />
        )}
      </tr>
    </thead>
  );
};
