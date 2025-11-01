import type { FC, ReactNode } from "react";

import { TABLE_BORDER, TB_PRELINE } from "../../../styles/style";

type Props = {
  children: ReactNode;
  hasNewLine?: boolean;
};

export const DataCell: FC<Props> = ({ children, hasNewLine = false }) => {
  const appliedClass = hasNewLine ? TB_PRELINE : TABLE_BORDER;
  return <td className={appliedClass}>{children}</td>;
};
