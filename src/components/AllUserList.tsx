import type { FC } from "react";
import { USER_LIST } from "../data/userList";
import type { UserType } from "../types/user";

export const AllUserList: FC = () => {
  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200 border border-gray-400">
          <th className="border border-gray-400">名前</th>
          <th className="border border-gray-400">ロール</th>
          <th className="border border-gray-400">メールアドレス</th>
          <th className="border border-gray-400">年齢</th>
          <th className="border border-gray-400">郵便番号</th>
          <th className="border border-gray-400">電話番号</th>
          <th className="border border-gray-400">趣味</th>
          <th className="border border-gray-400">URL</th>
          {/* student */}
          <th className="border border-gray-400">勉強時間</th>
          <th className="border border-gray-400">課題番号</th>
          <th className="border border-gray-400">勉強中の言語</th>
          <th className="border border-gray-400">ハピネススコア</th>
          <th className="border border-gray-400">対応可能なメンター</th>
          {/* mentor */}
          <th className="border border-gray-400">実務経験月数</th>
          <th className="border border-gray-400">現場で使っている言語</th>
          <th className="border border-gray-400">担当できる課題番号初め</th>
          <th className="border border-gray-400">担当できる課題番号終わり</th>
          <th className="border border-gray-400">対応可能な生徒</th>
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
    <tr className="border border-gray-400">
      <td className="border border-gray-400">{user.name}</td>
      <td className="border border-gray-400">{user.role}</td>
      <td className="border border-gray-400">{user.email}</td>
      <td className="border border-gray-400">{user.age}</td>
      <td className="border border-gray-400">{user.postCode}</td>
      <td className="border border-gray-400">{user.phone}</td>
      <td className="border border-gray-400 whitespace-pre-line">
        {user.hobbies.join("\n")}
      </td>
      <td className="border border-gray-400">{user.url}</td>
      {/* student */}
      <td className="border border-gray-400">
        {user.role === "student" ? user.studyMinutes : ""}
      </td>
      <td className="border border-gray-400">
        {user.role === "student" ? user.taskCode : ""}
      </td>
      <td className="border border-gray-400 whitespace-pre-line">
        {user.role === "student" ? user.studyLangs.join("\n") : ""}
      </td>
      <td className="border border-gray-400">
        {user.role === "student" ? user.score : ""}
      </td>
      <td className="border border-gray-400"></td>
      {/* mentor */}
      <td className="border border-gray-400">
        {user.role === "mentor" ? user.experienceDays : ""}
      </td>
      <td className="whitespace-pre-line">
        {user.role === "mentor" ? user.useLangs.join("\n") : ""}
      </td>
      <td className="border border-gray-400">
        {user.role === "mentor" ? user.availableStartCode : ""}
      </td>
      <td className="border border-gray-400">
        {user.role === "mentor" ? user.availableEndCode : ""}
      </td>
      <td className="border border-gray-400"></td>
    </tr>
  );
};
