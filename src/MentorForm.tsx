import type { ChangeEvent, FC } from "react";

import { InputItem } from "./InputItem";
import type { MentorFormType } from "./types/userInput";
import { useFormFields } from "./hooks/useFormFields";

type Props = {
  data: MentorFormType;
  setData: (data: MentorFormType) => void;
  // mentorData: MentorFormType;
  // setMentorData: (data: MentorFormType) => void;
};

export const MentorForm: FC<Props> = (props) => {
  const { data, setData } = props;
  // const { mentorData, setMentorData } = props;
  const { renderFields } = useFormFields(data, setData);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };

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

  return (
    <>
      {renderFields(fields)}
      {/* {fields.map((field) => (
        <InputItem
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={mentorData[field.name as keyof typeof mentorData] ?? ""}
          onChange={handleChange}
        />
      ))} */}
    </>
  );
};
