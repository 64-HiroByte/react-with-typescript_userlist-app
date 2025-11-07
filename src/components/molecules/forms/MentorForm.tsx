import type { FC } from "react";

import type { MentorFormType } from "../../../types/userInput";
import { useFormFields } from "../../../hooks/useFormFields";

type Props = {
  data: MentorFormType;
  setData: (data: MentorFormType) => void;
  errors: Record<keyof MentorFormType, string>;
};

export const MentorForm: FC<Props> = (props) => {
  const { data, setData, errors } = props;
  const { renderFields } = useFormFields(data, setData);

  const fields = [
    { label: "実務経験日数", type: "number", name: "experienceDays" },
    { label: "現場で使っている言語", type: "text", name: "useLangs" },
    {
      label: "担当できる課題番号初め",
      type: "number",
      name: "availableStartCode",
    },
    {
      label: "担当できる課題番号終わり",
      type: "number",
      name: "availableEndCode",
    },
  ];

  return <>{renderFields(fields, errors)}</>;
};
