import type { FC } from "react";
import type { UserBaseFormType } from "../../../types/userInput";
import { useFormFields } from "../../../hooks/useFormFields";

type Props = {
  data: UserBaseFormType;
  setData: (data: UserBaseFormType) => void;
  errors: Record<keyof UserBaseFormType, string>;
};

export const UserBaseForm: FC<Props> = (props) => {
  const { data, setData, errors } = props;
  const { renderFields } = useFormFields(data, setData);

  const fields = [
    { label: "名前", type: "text", name: "name", placeholder: "山田太郎" },
    {
      label: "メールアドレス",
      type: "email",
      name: "email",
      placeholder: "test@example.com",
    },
    { label: "年齢", type: "number", name: "age", placeholder: "30" },
    {
      label: "郵便番号",
      type: "text",
      name: "postCode",
      placeholder: "ハイフンなし（例: 1234567）",
    },
    {
      label: "電話番号",
      type: "text",
      name: "phone",
      placeholder: "ハイフンなし（例: 01234567890）",
    },
    {
      label: "趣味",
      type: "text",
      name: "hobbies",
      placeholder: "半角カンマ区切り（例: ドライブ,映画鑑賞）",
    },
    {
      label: "URL",
      type: "url",
      name: "url",
      placeholder: "http://www.example.com",
    },
  ];

  return <>{renderFields(fields, errors)}</>;
};
