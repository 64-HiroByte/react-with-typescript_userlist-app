import { useState } from "react";

import { UserTableContainer } from "./components/organisms/UserTableContainer";
import type { ViewType } from "./types/table";
import type { UserType } from "./types/user";
import { USER_LIST } from "./data/userList";

function App() {
  const [view, setView] = useState<ViewType>("all");
  const [users, setUsers] = useState<UserType[]>(USER_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      {/* {if (isModalOpen) && <AddUserModal />} */}
    </>
  );
}

export default App;
