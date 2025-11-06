import { useRef, useState } from "react";

import { UserTableContainer } from "./components/organisms/UserTableContainer";
import type { ViewType } from "./types/table";
import type { UserType } from "./types/user";
import type { UserFormType } from "./types/userInput";
import { USER_LIST } from "./data/userList";
import { AddUserModal } from "./AddUserModal";

function App() {
  const [view, setView] = useState<ViewType>("all");
  const [users, setUsers] = useState<UserType[]>(USER_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userIdRef = useRef(Math.max(...users.map((user) => user.id)));

  const convertToUser = (formData: UserFormType): UserType => {
    const base = {
      id: userIdRef.current + 1,
      name: formData.name,
      email: formData.email,
      age: Number(formData.age),
      postCode: formData.postCode,
      phone: formData.phone,
      hobbies: formData.hobbies
        ? formData.hobbies.split(",").map((hobby) => hobby.trim())
        : [],
      url: formData.url,
    };

    if (formData.role === "student") {
      return {
        ...base,
        role: "student",
        studyMinutes: Number(formData.studyMinutes),
        taskCode: Number(formData.taskCode),
        studyLangs: formData.studyLangs
          ? formData.studyLangs.split(",").map((studyLang) => studyLang.trim())
          : [],
        score: Number(formData.score),
      };
    }

    return {
      ...base,
      role: "mentor",
      experienceDays: Number(formData.experienceDays),
      useLangs: formData.useLangs
        ? formData.useLangs.split(",").map((useLang) => useLang.trim())
        : [],
      availableStartCode: Number(formData.availableStartCode),
      availableEndCode: Number(formData.availableEndCode),
    };
  };

  const onAddUser = (newUserFormData: UserFormType) => {
    const newUser = convertToUser(newUserFormData);
    setUsers((users) => [...users, newUser]);
    userIdRef.current++;
  };

  // const onAddUser = (newUserData: UserInputType) => {
  //   const newUser: UserType = {
  //     ...newUserData,
  //     id: userIdRef.current + 1,
  //   };
  //   userIdRef.current++;
  //   setUsers((users) => [...users, newUser]);
  // };

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
