import { useState, type FC } from "react";
import { USER_LIST } from "../../data/userList";
import { UserTable } from "./UserTable";
import type { Mentor, Student, UserType } from "../../types/user";

type SortKey = "studyMinutes" | "score" | "experienceDays";
type SortOrder = "asc" | "desc";
type Props = { view: "all" | "student" | "mentor" };

export const UserTableContainer: FC<Props> = ({ view }) => {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      // 同じ列をクリックした場合
      if (sortOrder === "asc") setSortOrder("desc");
      else if (sortOrder === "desc") {
        setSortKey(null);
        setSortOrder("asc");
      } else {
        setSortOrder("asc");
      }
    } else {
      // 他の列
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredUsers =
    view === "all" ? USER_LIST : USER_LIST.filter((u) => u.role === view);

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
