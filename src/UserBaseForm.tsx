import type { FC } from "react";
import type { UserBaseFormType } from "./types/userInput";
import { useFormFields } from "./hooks/useFormFields";

type Props = {
  data: UserBaseFormType;
  setData: (data: UserBaseFormType) => void;
  errors: Record<keyof UserBaseFormType, string>;
};

export const UserBaseForm: FC<Props> = (props) => {
  const { data, setData, errors } = props;
  const { renderFields } = useFormFields(data, setData);

  const fields = [
    { label: "名前", type: "text", name: "name" },
    { label: "メールアドレス", type: "email", name: "email" },
    { label: "年齢", type: "number", name: "age" },
    { label: "郵便番号", type: "text", name: "postCode" },
    { label: "電話番号", type: "text", name: "phone" },
    { label: "趣味", type: "text", name: "hobbies" },
    { label: "URL", type: "url", name: "url" },
  ];

  return <>{renderFields(fields, errors)}</>;
};
