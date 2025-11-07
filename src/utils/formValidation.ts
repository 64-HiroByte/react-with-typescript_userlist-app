import type {
  MentorFormType,
  StudentFormType,
  UserBaseFormType,
  UserFormType,
} from "../types/userInput";

/** --- エラーメッセージ --- */
const onlyNumberMessage = "数字のみ入力してください";
const separateCommaMessage = "半角カンマ（,）区切りで入力してください";

/** --- バリデーション --- */
const isNumeric = (value: string) => /^\d+$/.test(value);
const hasInvalidSeparator = (value: string) => /[　\s、，]/.test(value);

const validateFields = <T extends Record<string, string>>(
  data: T,
  numericFields: (keyof T)[],
  arrayFields: (keyof T)[]
): Partial<Record<keyof T, string>> => {
  const errors: Partial<Record<keyof T, string>> = {};

  numericFields.forEach((key) => {
    if (!isNumeric(data[key])) {
      errors[key] = onlyNumberMessage;
    }
  });

  arrayFields.forEach((key) => {
    if (hasInvalidSeparator(data[key])) {
      errors[key] = separateCommaMessage;
    }
  });
  return errors;
};

export const validateUserForm = (
  data: UserFormType
): Partial<Record<keyof UserFormType, string>> => {
  // 共通部分
  const baseErrors = validateFields<UserBaseFormType>(
    data,
    ["age", "postCode", "phone"],
    ["hobbies"]
  );

  // 生徒の場合
  if (data.role === "student") {
    const studentErrors = validateFields<StudentFormType>(
      data,
      ["studyMinutes", "taskCode", "score"],
      ["studyLangs"]
    );
    return { ...baseErrors, ...studentErrors };
  }

  // メンターの場合
  if (data.role === "mentor") {
    const mentorErrors = validateFields<MentorFormType>(
      data,
      ["experienceDays", "availableStartCode", "availableEndCode"],
      ["useLangs"]
    );
    return { ...baseErrors, ...mentorErrors };
  }

  // その他
  return {};
};
