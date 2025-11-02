import type { FC } from "react";
import { UserTableHeader } from "../molecules/tables/UserTableHeader";
import { UserTableBody } from "../molecules/tables/UserTableBody";

import type { UserType } from "../../types/user";
import type { SortKeyType, SortOrderType, ViewType } from "../../types/table";

type Props = {
  view: ViewType;
  users: UserType[];
  onSort: (key: SortKeyType) => void;
  sortKey: SortKeyType | null;
  sortOrder: SortOrderType;
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
