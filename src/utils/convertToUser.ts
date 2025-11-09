import type { UserType } from "../types/user";
import type { UserFormType } from "../types/userInput";

const toArrayFromStrings = (value: string): string[] => {
  return value ? value.split(",").map((s) => s.trim()) : [];
};

/**
 * フォームデータをUserType形式に変換するユーティリティー関数。
 * - 数値項目は、Numberに変換
 * - カンマ区切り文字列は、配列に変換
 */
export const convertToUser = (
  formData: UserFormType,
  newUserId: number
): UserType => {
  const base = {
    id: newUserId,
    name: formData.name,
    email: formData.email,
    age: Number(formData.age),
    postCode: formData.postCode,
    phone: formData.phone,
    hobbies: toArrayFromStrings(formData.hobbies),
    url: formData.url,
  };

  if (formData.role === "student") {
    return {
      ...base,
      role: "student",
      studyMinutes: Number(formData.studyMinutes),
      taskCode: Number(formData.taskCode),
      studyLangs: toArrayFromStrings(formData.studyLangs),
      score: Number(formData.score),
    };
  }

  return {
    ...base,
    role: "mentor",
    experienceDays: Number(formData.experienceDays),
    useLangs: toArrayFromStrings(formData.useLangs),
    availableStartCode: Number(formData.availableStartCode),
    availableEndCode: Number(formData.availableEndCode),
  };
};
