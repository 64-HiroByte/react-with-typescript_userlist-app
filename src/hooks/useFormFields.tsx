import type { ChangeEvent } from "react";

import { InputItem } from "../InputItem";

export const useFormFields = <T extends Record<string, string>>(
  data: T,
  setData: (data: T) => void
) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const renderFields = (
    fields: { label: string; type: string; name: string }[]
  ) => {
    return fields.map((field) => (
      <InputItem
        key={field.name}
        label={field.label}
        type={field.type}
        name={field.name}
        value={data[field.name as keyof typeof data] ?? ""}
        onChange={handleChange}
      />
    ));
  };

  return { handleChange, renderFields };
};
