import type { ChangeEvent, FC } from "react";
import { InputItem } from "./InputItem";
import type { UserBaseFormType } from "./types/userInput";

type Props = {
  baseData: UserBaseFormType;
  setBaseData: (data: UserBaseFormType) => void;
};

export const UserBaseForm: FC<Props> = (props) => {
  const { baseData, setBaseData } = props;

  const fields = [
    { label: "名前", type: "text", name: "name" },
    { label: "メールアドレス", type: "email", name: "email" },
    { label: "年齢", type: "number", name: "age" },
    { label: "郵便番号", type: "text", name: "postCode" },
    { label: "電話番号", type: "text", name: "phone" },
    { label: "趣味", type: "text", name: "hobbies" },
    { label: "URL", type: "url", name: "url" },
  ];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBaseData({ ...baseData, [name]: value });
  };

  return (
    <>
      {fields.map((field) => (
        <InputItem
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={baseData[field.name as keyof typeof baseData] ?? ""}
          onChange={handleChange}
        />
      ))}
    </>
  );
};
