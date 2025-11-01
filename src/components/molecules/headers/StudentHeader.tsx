import type { FC } from "react";

import { HeaderCell } from "../../atoms/cell/HeaderCell";
import { SortIcon } from "../../atoms/icons/SortIcon";

type Props = {
  view: "all" | "student" | "mentor";
  onSort: (key: "studyMinutes" | "score") => void;
  sortKey: "studyMinutes" | "score" | null;
  sortOrder: "asc" | "desc";
};

export const StudentHeader: FC<Props> = ({
  view,
  onSort,
  sortKey,
  sortOrder,
}) => {
  const isSortable = view === "student";

  return (
    <>
      <HeaderCell onClick={() => onSort("studyMinutes")}>
        勉強時間
        <SortIcon
          isSortable={isSortable}
          sortKey={sortKey}
          activeKey="studyMinutes"
          sortOrder={sortOrder}
        />
      </HeaderCell>
      <HeaderCell>課題番号</HeaderCell>
      <HeaderCell>勉強中の言語</HeaderCell>
      <HeaderCell onClick={() => onSort("score")}>
        ハピネススコア
        <SortIcon
          isSortable={isSortable}
          sortKey={sortKey}
          activeKey="score"
          sortOrder={sortOrder}
        />
      </HeaderCell>
      <HeaderCell>対応可能なメンター</HeaderCell>
    </>
  );
};
