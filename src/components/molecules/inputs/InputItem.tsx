import type { ChangeEvent } from "react";
import { cn } from "../../../lib/utils";

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
    <div className="grid grid-cols-3 mb-3 gap-x-1 items-center">
      <div className="text-right">
        <label htmlFor={name}>{label}:</label>
      </div>
      <div className="col-span-2">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            "border p-2 rounded w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300",
            error ? "border-red-500 focus:border-none" : "border-gray-300"
          )}
          required
        />
      </div>
      {error && (
        <p className=" col-start-2  col-span-2 ps-2 text-red-500">{error}</p>
      )}
    </div>
  );
};
