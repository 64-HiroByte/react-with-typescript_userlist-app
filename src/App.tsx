import { useRef, useState } from "react";

import { UserTableContainer } from "./components/organisms/UserTableContainer";
import type { ViewType } from "./types/table";
import type { UserType } from "./types/user";
import type { UserInputType } from "./types/userInput";
import { USER_LIST } from "./data/userList";
import { AddUserModal } from "./AddUserModal";

function App() {
  const [view, setView] = useState<ViewType>("all");
  const [users, setUsers] = useState<UserType[]>(USER_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userIdRef = useRef(Math.max(...users.map((user) => user.id)));

  const onAddUser = (newUserData: UserInputType) => {
    const newUser: UserType = {
      ...newUserData,
      id: userIdRef.current + 1,
    };
    userIdRef.current++;
    setUsers((users) => [...users, newUser]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <button onClick={() => setView("all")}>全ユーザー</button>
        <button onClick={() => setView("student")}>生徒</button>
        <button onClick={() => setView("mentor")}>メンター</button>
        <button onClick={() => setIsModalOpen(true)}>新規追加</button>
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
