import type { FC } from "react";
import { USER_LIST } from "../data/userList";
import type { UserType } from "../types/user";

export const AllUserList: FC = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>名前</th>
          <th>ロール</th>
          <th>メールアドレス</th>
          <th>年齢</th>
          <th>郵便番号</th>
          <th>電話番号</th>
          <th>趣味</th>
          <th>URL</th>
          {/* student */}
          <th>勉強時間</th>
          <th>課題番号</th>
          <th>勉強中の言語</th>
          <th>ハピネススコア</th>
          <th>対応可能なメンター</th>
          {/* mentor */}
          <th>実務経験月数</th>
          <th>現場で使っている言語</th>
          <th>担当できる課題番号初め</th>
          <th>担当できる課題番号終わり</th>
          <th>対応可能な生徒</th>
        </tr>
      </thead>
      <tbody>
        {USER_LIST.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

const UserRow: FC<{ user: UserType }> = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.role}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>{user.postCode}</td>
      <td>{user.phone}</td>
      <td className="whitespace-pre-line">{user.hobbies.join("\n")}</td>
      <td>{user.url}</td>
      {/* student */}
      <td>{user.role === "student" ? user.studyMinutes : ""}</td>
      <td>{user.role === "student" ? user.taskCode : ""}</td>
      <td className="whitespace-pre-line">
        {user.role === "student" ? user.studyLangs.join("\n") : ""}
      </td>
      <td>{user.role === "student" ? user.score : ""}</td>
      <td></td>
      {/* mentor */}
      <td>{user.role === "mentor" ? user.experienceDays : ""}</td>
      <td className="whitespace-pre-line">
        {user.role === "mentor" ? user.useLangs.join("\n") : ""}
      </td>
      <td>{user.role === "mentor" ? user.availableStartCode : ""}</td>
      <td>{user.role === "mentor" ? user.availableEndCode : ""}</td>
      <td></td>
    </tr>
  );
};
