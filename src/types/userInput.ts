import type { Mentor, Student } from "./user";

type WithoutIdType<T> = Omit<T, "id">;

// 新規ユーザー登録用 型エイリアス
export type UserInputType = WithoutIdType<Student> | WithoutIdType<Mentor>;
