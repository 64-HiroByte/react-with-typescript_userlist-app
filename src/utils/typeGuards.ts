import type { Mentor, Student, UserType } from "../types/user";

/** 生徒であることを判定する型ガード */
export const isStudentUser = (user: UserType): user is Student =>
  user.role === "student";

/** メンターであることを判定する型ガード */
export const isMentorUser = (user: UserType): user is Mentor =>
  user.role === "mentor";
