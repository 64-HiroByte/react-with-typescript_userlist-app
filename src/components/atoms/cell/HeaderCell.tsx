import type { FC, ReactNode } from "react";
import { TABLE_BORDER } from "../../../styles/style";

type Props = {
  children: ReactNode;
};

export const HeaderCell: FC<Props> = ({ children }) => {
  return <th className={TABLE_BORDER}>{children}</th>;
};
