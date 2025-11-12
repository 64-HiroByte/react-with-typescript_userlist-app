import { useRef, useState } from "react";

import { UserTableContainer } from "./components/organisms/UserTableContainer";
import { AddUserModal } from "./components/organisms/modals/AddUserModal";
import type { ViewType } from "./types/table";
import type { UserType } from "./types/user";
import type { UserFormType } from "./types/userInput";
import { USER_LIST } from "./data/userList";
import { convertToUser } from "./utils/convertToUser";
import { Button } from "./components/atoms/button/Button";

function App() {
  const [view, setView] = useState<ViewType>("all");
  const [users, setUsers] = useState<UserType[]>(USER_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userIdRef = useRef(Math.max(...users.map((user) => user.id)));

  const onAddUser = (newUserFormData: UserFormType) => {
    userIdRef.current++;
    const newUser = convertToUser(newUserFormData, userIdRef.current);
    setUsers((users) => [...users, newUser]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold py-4 text-center bg-linear-to-r from-gray-200 via-gray-500 to-gray-200 text-white tracking-widest shadow-lg">
        ユーザー一覧
      </h1>

      {/* 表示切り替えボタンとユーザー登録ボタン */}
      <div className="flex gap-1 my-4 justify-center">
        {/* 全ユーザー表示 */}
        <Button
          variant="outline"
          isActive={view === "all"}
          onClick={() => setView("all")}
        >
          全ユーザー
        </Button>

        {/* 生徒表示 */}
        <Button
          variant="outline"
          isActive={view === "student"}
          onClick={() => setView("student")}
        >
          生徒
        </Button>

        {/* メンター表示 */}
        <Button
          variant="outline"
          isActive={view === "mentor"}
          onClick={() => setView("mentor")}
        >
          メンター
        </Button>

        {/* ユーザー登録 */}
        <Button
          onClick={() => setIsModalOpen(true)}
          color="blue"
          className="rounded-full size-8 font-bold"
        >
          ＋
        </Button>
      </div>

      {/* データテーブル描画 */}
      <UserTableContainer view={view} users={users} />

      {/* 新規ユーザー登録モーダル */}
      {isModalOpen && (
        <AddUserModal
          onAddUser={onAddUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default App;
