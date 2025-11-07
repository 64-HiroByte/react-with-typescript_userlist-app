import type { Mentor, Student, UserBase } from "./user";

// type WithoutIdType<T> = Omit<T, "id">;

// // 新規ユーザー登録用 型エイリアス
// export type UserInputType = WithoutIdType<Student> | WithoutIdType<Mentor>;
// export type UserBaseInputType = WithoutIdType<UserBase>

// 既存のキーの型をstring型に変更する
type ToString<T> = {
  [K in keyof T]: string;
};

// idを除く共通項目
export type UserBaseFormType = ToString<Omit<UserBase, "id">>;

// 生徒用入力フォーム
export type StudentFormType = ToString<Omit<Student, keyof UserBase>> & {
  role: "student";
};

// メンター用入力フォーム
export type MentorFormType = ToString<Omit<Mentor, keyof UserBase>> & {
  role: "mentor";
};

export type UserFormType = UserBaseFormType &
  (StudentFormType | MentorFormType);
