import type { FC } from "react";

import { HeaderCell } from "../../atoms/cell/HeaderCell";

type Props = {
  onSort: (key: "studyMinutes" | "score") => void;
};

export const StudentHeader: FC<Props> = ({ onSort }) => (
  <>
    <HeaderCell onClick={() => onSort("studyMinutes")}>勉強時間</HeaderCell>
    <HeaderCell>課題番号</HeaderCell>
    <HeaderCell>勉強中の言語</HeaderCell>
    <HeaderCell onClick={() => onSort("score")}>ハピネススコア</HeaderCell>
    <HeaderCell>対応可能なメンター</HeaderCell>
  </>
);
