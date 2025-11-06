import type {
  MentorFormType,
  StudentFormType,
  UserBaseFormType,
  UserFormType,
} from "../types/userInput";

export const validateUserForm = (data: UserFormType) => {
  const invalidNumberMessage = "0以上の整数を入力してください";
  const onlyNumberMessage = "数字のみ入力してください";
  const separateCommaMessage = "半角カンマ（,）区切りで入力してください";

  const validateUserBaseForm = (base: UserBaseFormType) => {
    const errors: Partial<Record<keyof UserBaseFormType, string>> = {};

    if (!/^\d+$/.test(base.age)) errors.age = invalidNumberMessage;
    if (!/^\d+$/.test(base.postCode)) errors.postCode = onlyNumberMessage;
    if (!/^\d+$/.test(base.phone)) errors.phone = onlyNumberMessage;
    if (/[　\s、，]/.test(data.hobbies)) errors.hobbies = separateCommaMessage;

    return errors;
  };

  if (data.role === "student") {
    const studentErrors: Partial<Record<keyof StudentFormType, string>> = {};

    if (!/^\d+$/.test(data.studyMinutes))
      studentErrors.studyMinutes = invalidNumberMessage;
    if (!/^\d+$/.test(data.taskCode))
      studentErrors.taskCode = invalidNumberMessage;
    // if (data.studyLangs.split(",").some((language) => language.trim() === "")) {
    //   studentErrors.studyLangs = separateCommaMessage;
    // }
    if (/[　\s、，]/.test(data.studyLangs))
      studentErrors.studyLangs = separateCommaMessage;
    if (!/^\d+$/.test(data.score)) studentErrors.score = invalidNumberMessage;
    return { ...validateUserBaseForm(data), ...studentErrors };
  } else {
    const mentorErrors: Partial<Record<keyof MentorFormType, string>> = {};

    if (!/^\d+$/.test(data.experienceDays))
      mentorErrors.experienceDays = invalidNumberMessage;
    if (/[　\s、，]/.test(data.useLangs))
      mentorErrors.useLangs = separateCommaMessage;
    // if (data.useLangs.split(",").some((language) => language.trim() === "")) {
    //   mentorErrors.useLangs = separateCommaMessage;
    // }
    if (!/^\d+$/.test(data.availableStartCode))
      mentorErrors.availableStartCode = invalidNumberMessage;
    if (!/^\d+$/.test(data.availableEndCode))
      mentorErrors.availableEndCode = invalidNumberMessage;
    return { ...validateUserBaseForm(data), ...mentorErrors };
  }
};
