import type { Mentor, Student, UserType } from "../types/user";

// 型ガード関数
export const isStudentUser = (user: UserType): user is Student =>
  user.role === "student";

export const isMentorUser = (user: UserType): user is Mentor =>
  user.role === "mentor";
