// src/types/table.ts
export type ViewType = "all" | "student" | "mentor";

export type StudentSortKeyType = "studyMinutes" | "score";
export type MentorSortKeyType = "experienceDays";
export type SortKeyType = StudentSortKeyType | MentorSortKeyType;

export type SortOrderType = "asc" | "desc";
