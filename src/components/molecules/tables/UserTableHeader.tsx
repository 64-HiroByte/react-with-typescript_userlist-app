import type { FC } from "react";

import { CommonHeader } from "../headers/CommonHeader";
import { StudentHeader } from "../headers/StudentHeader";
import { MentorHeader } from "../headers/MentorHeader";
import type {
  MentorSortKeyType,
  SortKeyType,
  SortOrderType,
  StudentSortKeyType,
  ViewType,
} from "../../../types/table";

type Props = {
  view: ViewType;
  onSort: (key: SortKeyType) => void;
  sortKey: SortKeyType | null;
  sortOrder: SortOrderType;
};

export const UserTableHeader: FC<Props> = ({
  view,
  onSort,
  sortKey,
  sortOrder,
}) => {
  return (
    <thead>
      <tr className="bg-gray-200">
        {/* 共通ヘッダー */}
        <CommonHeader />

        {/* student */}
        {view !== "mentor" && (
          <StudentHeader
            view={view}
            onSort={onSort}
            sortKey={sortKey as StudentSortKeyType | null}
            sortOrder={sortOrder}
          />
        )}

        {/* mentor */}
        {view !== "student" && (
          <MentorHeader
            view={view}
            onSort={onSort}
            sortKey={sortKey as MentorSortKeyType | null}
            sortOrder={sortOrder}
          />
        )}
      </tr>
    </thead>
  );
};
