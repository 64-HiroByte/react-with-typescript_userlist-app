import {
  FaSort,
  FaSortNumericDown,
  FaSortNumericDownAlt,
} from "react-icons/fa";

import type { SortOrderType } from "../../../types/table";

type Props = {
  isSortable: boolean;
  sortKey: string | null;
  activeKey: string;
  sortOrder: SortOrderType;
};

export const SortIcon = ({
  isSortable,
  sortKey,
  activeKey,
  sortOrder,
}: Props) => {
  // ソート不可の場合はリターン
  if (!isSortable) return null;

  // 初期状態（ソートなし）
  if (sortKey !== activeKey)
    return <FaSort className="inline ml-1 text-gray-400" />;

  // 昇順
  if (sortOrder === "asc")
    return <FaSortNumericDown className="inline ml-1 text-gray-600" />;

  // 降順
  if (sortOrder === "desc")
    return <FaSortNumericDownAlt className="inline ml-1 text-gray-600" />;
  return <FaSort className="inline ml-1 text-gray-400" />;
};
