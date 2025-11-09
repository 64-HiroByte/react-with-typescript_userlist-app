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

    // 前処理（入力された値の前後のスペースを削除）
    const trimmedUserData = Object.fromEntries(
      Object.entries(newUserData).map(([key, value]) => [key, value.trim()])
    ) as UserFormType;

    // バリデーション
    const validationErrors = validateUserForm(trimmedUserData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ユーザー登録処理
    onAddUser(trimmedUserData);
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center"
      style={{ zIndex: 100 }}
    >
      <div className="bg-gray-100 rounded-lg  w-[640px] max-h-[90vh] overflow-y-auto shadow-lg">
        <h2 className="text-xl font-bold py-3 text-center bg-linear-to-r from-gray-300 via-gray-500 to-gray-300 text-gray-200 tracking-widest">
          ユーザー登録
        </h2>
        <div className="p-6">
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
            </div>

            {/* 共通 */}
            <UserBaseForm
              data={baseData}
              setData={setBaseData}
              errors={errors}
            />

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
            <div className="flex justify-end gap-2 mt-6">
              <Button type="button" onClick={onClose} color="gray">
                閉じる
              </Button>
              <Button type="submit">登録</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
