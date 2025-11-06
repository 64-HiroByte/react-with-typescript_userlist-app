import type { ChangeEvent, FC } from "react";

import { InputItem } from "./InputItem";
import type { StudentFormType } from "./types/userInput";
import { useFormFields } from "./hooks/useFormFields";

type Props = {
  data: StudentFormType;
  setData: (data: StudentFormType) => void;
  // studentData: StudentFormType;
  // setStudentData: (data: StudentFormType) => void;
};

export const StudentForm: FC<Props> = (props) => {
  const { data, setData } = props;
  // const { studentData, setStudentData } = props;
  const { renderFields } = useFormFields(data, setData);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };

  const fields = [
    { label: "勉強時間", type: "number", name: "studyMinutes" },
    { label: "課題番号", type: "number", name: "taskCode" },
    { label: "学習中の言語", type: "text", name: "studyLangs" },
    { label: "ハピネススコア", type: "number", name: "score" },
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
          value={studentData[field.name as keyof typeof studentData] ?? ""}
          onChange={handleChange}
        />
      ))} */}
    </>
  );
};
