import type { Mentor, Student, UserType } from "../types/user";

export const findSupportedUsers = (
  user: UserType,
  userList: UserType[]
): UserType[] => {
  if (user.role === "student") {
    return userList.filter(
      (u): u is Mentor =>
        u.role === "mentor" &&
        u.availableStartCode <= user.taskCode &&
        u.availableEndCode >= user.taskCode
    );
  }

  if (user.role === "mentor") {
    return userList.filter(
      (u): u is Student =>
        u.role === "student" &&
        u.taskCode >= user.availableStartCode &&
        u.taskCode <= user.availableEndCode
    );
  }
  return [];
};
