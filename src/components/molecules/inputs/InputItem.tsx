import type { ChangeEvent } from "react";

type Props = {
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
};

export const InputItem = (props: Props) => {
  const { label, type, value, name, onChange, error } = props;
  return (
    <div className="">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`border p-2 rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        required
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
