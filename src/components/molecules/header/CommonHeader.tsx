import { TABLE_BORDER } from "../../../styles/style";

export const CommonHeader = () => (
  <>
    <th className={TABLE_BORDER}>名前</th>
    <th className={TABLE_BORDER}>ロール</th>
    <th className={TABLE_BORDER}>メールアドレス</th>
    <th className={TABLE_BORDER}>年齢</th>
    <th className={TABLE_BORDER}>郵便番号</th>
    <th className={TABLE_BORDER}>電話番号</th>
    <th className={TABLE_BORDER}>趣味</th>
    <th className={TABLE_BORDER}>URL</th>
  </>
);
