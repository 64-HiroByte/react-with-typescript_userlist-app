import type { FC } from "react";
import type { UserType } from "../../../types/user";
import { UserTableRow } from "./UserTableRow";

type Props = {
  view: "all" | "student" | "mentor";
  users: UserType[];
};

export const UserTableBody: FC<Props> = ({ view, users }) => {
  // const users = USER_LIST.filter(
  //   (user): user is UserType => view === "all" || user.role === view
  // );

  // const users = USER_LIST.filter((u): u is UserType => {
  //   if (view === "all") return true;
  //   return u.role === view;
  // });
  return (
    <tbody>
      {users.map((user) => (
        <UserTableRow key={user.id} user={user} view={view} />
      ))}
    </tbody>
  );
};
