import type { FC } from "react";
import { HeaderCell } from "../../atoms/cell/HeaderCell";
import { SortIcon } from "../../atoms/icons/SortIcon";

type Props = {
  view: "all" | "student" | "mentor";
  onSort: (key: "experienceDays") => void;
  sortKey: "experienceDays" | null;
  sortOrder: "asc" | "desc";
};

export const MentorHeader: FC<Props> = ({
  view,
  onSort,
  sortKey,
  sortOrder,
}) => {
  const isSortable = view === "mentor";

  return (
    <>
      <HeaderCell onClick={() => onSort("experienceDays")}>
        実務経験月数
        <SortIcon
          isSortable={isSortable}
          sortKey={sortKey}
          activeKey="experienceDays"
          sortOrder={sortOrder}
        />
      </HeaderCell>
      <HeaderCell>現場で使っている言語</HeaderCell>
      <HeaderCell>担当できる課題番号初め</HeaderCell>
      <HeaderCell>担当できる課題番号終わり</HeaderCell>
      <HeaderCell>対応可能な生徒</HeaderCell>
    </>
  );
};
