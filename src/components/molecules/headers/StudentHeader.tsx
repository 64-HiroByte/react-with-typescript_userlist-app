import type { FC } from "react";

import { HeaderCell } from "../../atoms/cell/HeaderCell";

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
        {isSortable &&
          sortKey === "studyMinutes" &&
          (sortOrder === "asc" ? "▲" : "▼")}
      </HeaderCell>
      <HeaderCell>課題番号</HeaderCell>
      <HeaderCell>勉強中の言語</HeaderCell>
      <HeaderCell onClick={() => onSort("score")}>
        ハピネススコア
        {isSortable && sortKey === "score" && (sortOrder === "asc" ? "▲" : "▼")}
      </HeaderCell>
      <HeaderCell>対応可能なメンター</HeaderCell>
    </>
  );
};
