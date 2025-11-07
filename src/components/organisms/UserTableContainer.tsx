import { useState, type FC } from "react";
// import { USER_LIST } from "../../data/userList";
import { UserTable } from "./UserTable";
import type { Mentor, Student, UserType } from "../../types/user";
import type { SortKeyType, SortOrderType, ViewType } from "../../types/table";

type Props = {
  view: ViewType;
  users: UserType[];
};

export const UserTableContainer: FC<Props> = ({ view, users }) => {
  const [sortKey, setSortKey] = useState<SortKeyType | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrderType>("asc");

  const handleSort = (key: SortKeyType) => {
    if (sortKey === key) {
      // 同じ列でソートアイコンをクリックした場合: 昇順 -> 降順 -> リセット
      if (sortOrder === "asc") setSortOrder("desc");
      else if (sortOrder === "desc") {
        setSortKey(null);
        setSortOrder("asc");
      }
    } else {
      // 別の列のソートアイコンをクリックした場合: 新しいキーで昇順
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredUsers =
    view === "all" ? users : users.filter((u) => u.role === view);

  // TODO: カスタムフックにするか検討する
  const sortedUsers = sortKey
    ? [...filteredUsers].sort((a, b) => {
        const getVal = (user: UserType): number | null => {
          if (view === "student" && user.role === "student") {
            return user[sortKey as keyof Student] as number;
          }
          if (view === "mentor" && user.role === "mentor") {
            return user[sortKey as keyof Mentor] as number;
          }
          return null;
        };
        const valA = getVal(a);
        const valB = getVal(b);

        if (valA === null || valB === null) return 0;
        return sortOrder === "asc" ? valA - valB : valB - valA;
      })
    : filteredUsers;

  return (
    <UserTable
      users={sortedUsers}
      view={view}
      onSort={handleSort}
      sortKey={sortKey}
      sortOrder={sortOrder}
    />
  );
};
