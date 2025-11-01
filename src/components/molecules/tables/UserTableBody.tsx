import type { FC } from "react";

import { UserTableRow } from "./UserTableRow";
import type { UserType } from "../../../types/user";
import type { ViewType } from "../../../types/table";

type Props = {
  view: ViewType;
  users: UserType[];
};

export const UserTableBody: FC<Props> = ({ view, users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <UserTableRow key={user.id} user={user} view={view} />
      ))}
    </tbody>
  );
};
