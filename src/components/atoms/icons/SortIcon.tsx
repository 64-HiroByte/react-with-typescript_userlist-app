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
  if (!isSortable) return null;
  if (sortKey !== activeKey)
    return <FaSort className="inline ml-1 text-gray-400" />;
  if (sortOrder === "asc")
    return <FaSortNumericDown className="inline ml-1 text-gray-600" />;
  if (sortOrder === "desc")
    return <FaSortNumericDownAlt className="inline ml-1 text-gray-600" />;
  return <FaSort className="inline ml-1 text-gray-400" />;
};
