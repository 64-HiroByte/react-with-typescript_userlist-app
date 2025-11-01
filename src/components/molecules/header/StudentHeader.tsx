import { TABLE_BORDER } from "../../../styles/style";

export const StudentHeader = () => (
  <>
    <th className={TABLE_BORDER}>勉強時間</th>
    <th className={TABLE_BORDER}>課題番号</th>
    <th className={TABLE_BORDER}>勉強中の言語</th>
    <th className={TABLE_BORDER}>ハピネススコア</th>
    <th className={TABLE_BORDER}>対応可能なメンター</th>
  </>
);
