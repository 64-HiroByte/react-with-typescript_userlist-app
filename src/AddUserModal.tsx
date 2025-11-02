import { useState, type FormEvent } from "react";
import type { Mentor, Student, UserBase } from "./types/user";
import type { UserInputType } from "./types/userInput";

export const AddUserModal = ({
  onClose,
  onAddUser,
}: {
  onAddUser: (newUserData: UserInputType) => void;
  onClose: () => void;
}) => {
  const [role, setRole] = useState<"student" | "mentor">("student");

  const [baseData, setBaseData] = useState<UserBase>({
    id: 0,
    name: "",
    email: "",
    age: 0,
    postCode: "",
    phone: "",
    hobbies: [],
    url: "",
  });

  const [studentData, setStudentData] = useState<Omit<Student, keyof UserBase>>(
    {
      role: "student",
      studyMinutes: 0,
      taskCode: 0,
      studyLangs: [],
      score: 0,
    }
  );

  const [mentorData, setMentorData] = useState<Omit<Mentor, keyof UserBase>>({
    role: "mentor",
    experienceDays: 0,
    useLangs: [],
    availableStartCode: 0,
    availableEndCode: 0,
  });

  const handleRoleChange = (newRole: "student" | "mentor") => {
    setRole(newRole);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newUserData: UserInputType =
      role === "student"
        ? { ...baseData, ...studentData }
        : { ...baseData, ...mentorData };
    onAddUser(newUserData);
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center"
      style={{ zIndex: 1000 }}
    >
      <div className="bg-gray-100 rounded-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto shadow-lg">
        <h2 className="text-xl font-bold mb-4">新規ユーザー登録</h2>
        <form>
          {/* Role 切り替え */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              className={`px-3 py-1 rounded ${
                role === "student" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleRoleChange("student")}
            >
              生徒
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded ${
                role === "mentor" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleRoleChange("mentor")}
            >
              メンター
            </button>
          </div>

          {/* 共通 */}
          <div>
            <label htmlFor="nameForm">名前</label>
            <input type="text" id="nameForm" />
          </div>
          <div>
            <label htmlFor="emailForm">メールアドレス</label>
            <input type="email" id="emailForm" />
          </div>
          <div>
            <label htmlFor="age">年齢</label>
            <input type="text" id="age" />
          </div>
          <div>
            <label htmlFor="postCodeForm">郵便番号</label>
            <input type="text" id="postCodeForm" />
          </div>
          <div>
            <label htmlFor="phoneForm">電話番号</label>
            <input type="text" id="phoneForm" />
          </div>
          <div>
            <label htmlFor="hobiesForm">趣味</label>
            <input type="text" id="hobiesForm" />
          </div>
          <div>
            <label htmlFor="urlForm">URL</label>
            <input type="text" id="urlForm" />
          </div>

          {/* 生徒 */}
          {role === "student" && (
            <>
              <div>
                <label htmlFor="studyMinutesForm">勉強時間</label>
                <input type="text" id="studyMinutesForm" />
              </div>
              <div>
                <label htmlFor="taskCodeForm">課題番号</label>
                <input type="text" id="taskCodeForm" />
              </div>
              <div>
                <label htmlFor="studyLangsForm">学習中の言語</label>
                <input type="text" id="studyLangsForm" />
              </div>
              <div>
                <label htmlFor="scoreForm">ハピネススコア</label>
                <input type="text" id="scoreForm" />
              </div>
            </>
          )}

          {/* メンター */}
          {role === "mentor" && (
            <>
              <div>
                <label htmlFor="experienceDaysForm">実務経験月数</label>
                <input type="text" id="experienceDaysForm" />
              </div>
              <div>
                <label htmlFor="useLangForm">現場で使っている言語</label>
                <input type="text" id="useLangForm" />
              </div>
              <div>
                <label htmlFor="availableStartCodeForm">
                  担当できる課題番号初め
                </label>
                <input type="text" id="availableStartCodeForm" />
              </div>
              <div>
                <label htmlFor="availableEndCodeForm">
                  担当できる課題番号終わり
                </label>
                <input type="text" id="availableEndCodeForm" />
              </div>
            </>
          )}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded"
              onClick={onClose}
            >
              閉じる
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              登録
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
