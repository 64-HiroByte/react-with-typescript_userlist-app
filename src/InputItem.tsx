import type { ChangeEvent } from "react";

type Props = {
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputItem = (props: Props) => {
  const { label, type, value, name, onChange } = props;
  return (
    <div>
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className=""
      />
    </div>
  );
};
