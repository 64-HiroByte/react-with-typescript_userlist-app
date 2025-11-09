import type { FC } from "react";

import type { StudentFormType } from "../../../types/userInput";
import { useFormFields } from "../../../hooks/useFormFields";

type Props = {
  data: StudentFormType;
  setData: (data: StudentFormType) => void;
  errors: Record<keyof StudentFormType, string>;
};

export const StudentForm: FC<Props> = (props) => {
  const { data, setData, errors } = props;
  const { renderFields } = useFormFields(data, setData);

  const fields = [
    {
      label: "勉強時間",
      type: "number",
      name: "studyMinutes",
      placeholder: "分単位で入力（例: 1200）",
    },
    { label: "課題番号", type: "number", name: "taskCode", placeholder: "101" },
    {
      label: "学習中の言語",
      type: "text",
      name: "studyLangs",
      placeholder: "半角カンマ区切り（例: JavaScript,Python）",
    },
    {
      label: "ハピネススコア",
      type: "number",
      name: "score",
      placeholder: "80",
    },
  ];

  return <>{renderFields(fields, errors)}</>;
};
