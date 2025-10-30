import type { FC } from "react";
import { USER_LIST } from "../../data/userList";
import type { UserType } from "../../types/user";
import { UserTableRow } from "./UserTableRow";

type Props = { view: "all" | "student" | "mentor" };

export const UserTableBody: FC<Props> = ({ view }) => {
  const users = USER_LIST.filter((u): u is UserType => {
    if (view === "all") return true;
    return u.role === view;
  });
  return (
    <tbody>
      {users.map((user) => (
        <UserTableRow key={user.id} user={user} view={view} />
      ))}
    </tbody>
  );
};
