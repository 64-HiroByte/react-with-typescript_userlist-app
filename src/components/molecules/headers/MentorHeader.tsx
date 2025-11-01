import type { FC } from "react";
import { HeaderCell } from "../../atoms/cell/HeaderCell";

type Props = {
  onSort: (key: "experienceDays") => void;
};

export const MentorHeader: FC<Props> = ({ onSort }) => (
  <>
    <HeaderCell onClick={() => onSort("experienceDays")}>
      実務経験月数
    </HeaderCell>
    <HeaderCell>現場で使っている言語</HeaderCell>
    <HeaderCell>担当できる課題番号初め</HeaderCell>
    <HeaderCell>担当できる課題番号終わり</HeaderCell>
    <HeaderCell>対応可能な生徒</HeaderCell>
  </>
);
