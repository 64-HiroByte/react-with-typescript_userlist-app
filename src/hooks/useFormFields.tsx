import type { ChangeEvent } from "react";

import { InputItem } from "../components/molecules/inputs/InputItem";

/**
 * フォーム入力値の状態管理、入力フィールドの描画を行うカスタムフック
 *
 * @template T - フォームデータの型（全て文字列）
 * @param data - 現在のフォームデータ
 * @param setData - フォームデータを更新する関数
 * @returns handleChange: input要素のonChangeハンドラ
 * @returns renderFields: フィールド定義に基づいてInputItemを描画する関数
 *
 * 使用例：
 * ```
 * const { renderFields } = useFormFields(data, setData);
 *
 * return <>{renderFields(fields, errors)}</>;
 * ```
 */
export const useFormFields = <T extends Record<string, string>>(
  data: T,
  setData: (data: T) => void
) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const renderFields = (
    fields: {
      label: string;
      type: string;
      name: string;
      placeholder: string;
    }[],
    errors: Record<keyof T, string>
  ) => {
    return fields.map((field) => (
      <InputItem
        key={field.name}
        label={field.label}
        type={field.type}
        name={field.name}
        value={data[field.name as keyof typeof data] ?? ""}
        onChange={handleChange}
        placeholder={field.placeholder}
        error={errors[field.name]}
      />
    ));
  };

  return { handleChange, renderFields };
};
