import type { FC } from "react";

import type { UserType } from "../../../types/user";
import { DataCell } from "../../atoms/cell/DataCell";

export const BaseDataCell: FC<{ user: UserType }> = ({ user }) => (
  <>
    <DataCell>{user.name}</DataCell>
    <DataCell>{user.role}</DataCell>
    <DataCell>{user.email}</DataCell>
    <DataCell>{user.age}</DataCell>
    <DataCell>{user.postCode}</DataCell>
    <DataCell>{user.phone}</DataCell>
    <DataCell hasNewLine>{user.hobbies.join("\n")}</DataCell>
    <DataCell>{user.url}</DataCell>
  </>
);
