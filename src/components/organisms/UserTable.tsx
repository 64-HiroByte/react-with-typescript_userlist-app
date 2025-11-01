import type { FC } from "react";
import { UserTableHeader } from "../molecules/tables/UserTableHeader";
import { UserTableBody } from "../molecules/tables/UserTableBody";
import type { UserType } from "../../types/user";

type SortKey = "studyMinutes" | "score" | "experienceDays";
type SortOrder = "asc" | "desc";
type Props = {
  view: "all" | "student" | "mentor";
  users: UserType[];
  onSort: (key: SortKey) => void;
  sortKey: SortKey | null;
  sortOrder: SortOrder;
};

export const UserTable: FC<Props> = ({
  view,
  users,
  onSort,
  sortKey,
  sortOrder,
}) => {
  return (
    <table className={`table-auto border-collapse`}>
      <UserTableHeader
        view={view}
        onSort={onSort}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />
      <UserTableBody view={view} users={users} />
    </table>
  );
};
