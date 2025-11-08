import { useState, type FC, type FormEvent } from "react";

import { UserBaseForm } from "../../molecules/forms/UserBaseForm";
import { StudentForm } from "../../molecules/forms/StudentForm";
import { MentorForm } from "../../molecules/forms/MentorForm";
import type {
  MentorFormType,
  StudentFormType,
  UserBaseFormType,
  UserFormType,
} from "../../../types/userInput";
import { validateUserForm } from "../../../utils/formValidation";
import { Button } from "../../atoms/button/Button";

type Props = {
  onAddUser: (newUserData: UserFormType) => void;
  onClose: () => void;
};

export const AddUserModal: FC<Props> = (props) => {
  const { onClose, onAddUser } = props;
  const [role, setRole] = useState<"student" | "mentor">("student");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [baseData, setBaseData] = useState<UserBaseFormType>({
    name: "",
    email: "",
    age: "",
    postCode: "",
    phone: "",
    hobbies: "",
    url: "",
  });

  const [studentData, setStudentData] = useState<StudentFormType>({
    role: "student",
    studyMinutes: "",
    taskCode: "",
    studyLangs: "",
    score: "",
  });

  const [mentorData, setMentorData] = useState<MentorFormType>({
    role: "mentor",
    experienceDays: "",
    useLangs: "",
    availableStartCode: "",
    availableEndCode: "",
  });

  const handleRoleChange = (newRole: "student" | "mentor") => {
    setRole(newRole);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newUserData: UserFormType =
      role === "student"
        ? { ...baseData, ...studentData }
        : { ...baseData, ...mentorData };

    // バリデーション
    const validationErrors = validateUserForm(newUserData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ユーザー登録処理
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
        <form method="post" onSubmit={handleSubmit}>
          {/* Role 切り替え */}
          <div className="flex justify-center gap-2 mb-4">
            <Button
              type="button"
              onClick={() => handleRoleChange("student")}
              variant="outline"
              isActive={role === "student"}
            >
              生徒
            </Button>
            <Button
              type="button"
              onClick={() => handleRoleChange("mentor")}
              variant="outline"
              isActive={role === "mentor"}
            >
              メンター
            </Button>
            {/* <button
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
            </button> */}
          </div>

          {/* 共通 */}
          <UserBaseForm data={baseData} setData={setBaseData} errors={errors} />

          {/* 生徒 */}
          {role === "student" && (
            <>
              <StudentForm
                data={studentData}
                setData={setStudentData}
                errors={errors}
              />
            </>
          )}

          {/* メンター */}
          {role === "mentor" && (
            <>
              <MentorForm
                data={mentorData}
                setData={setMentorData}
                errors={errors}
              />
            </>
          )}

          {/* ボタン */}
          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              onClick={onClose}
              color="gray"
              // className="bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-white"
            >
              閉じる
            </Button>
            <Button type="submit">登録</Button>

            {/* <button
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
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};
