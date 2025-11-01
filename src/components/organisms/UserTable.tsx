import type { FC } from "react";
import { UserTableHeader } from "../molecules/table/UserTableHeader";
import { UserTableBody } from "../molecules/table/UserTableBody";

type Props = { view: "all" | "student" | "mentor" };

export const UserTable: FC<Props> = ({ view }) => {
  return (
    <table className={`table-auto border-collapse`}>
      <UserTableHeader view={view} />
      <UserTableBody view={view} />
    </table>
  );
};
