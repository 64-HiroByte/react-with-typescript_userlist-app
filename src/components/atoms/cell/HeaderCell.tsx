import type { FC, ReactNode } from "react";
import { TABLE_BORDER } from "../../../styles/style";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const HeaderCell: FC<Props> = ({ children, onClick }) => {
  return (
    <th className={TABLE_BORDER} onClick={onClick}>
      {children}
    </th>
  );
};
