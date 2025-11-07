import type { FC } from "react";

import type { StudentFormType } from "./types/userInput";
import { useFormFields } from "./hooks/useFormFields";

type Props = {
  data: StudentFormType;
  setData: (data: StudentFormType) => void;
  errors: Record<keyof StudentFormType, string>;
};

export const StudentForm: FC<Props> = (props) => {
  const { data, setData, errors } = props;
  const { renderFields } = useFormFields(data, setData);

  const fields = [
    { label: "勉強時間", type: "number", name: "studyMinutes" },
    { label: "課題番号", type: "number", name: "taskCode" },
    { label: "学習中の言語", type: "text", name: "studyLangs" },
    { label: "ハピネススコア", type: "number", name: "score" },
  ];

  return <>{renderFields(fields, errors)}</>;
};
