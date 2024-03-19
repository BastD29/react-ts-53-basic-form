import { ChangeEvent, FC } from "react";

type InputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField: FC<InputProps> = ({ label, type, name, value, onChange }) => (
  <div>
    <label>
      {label}:
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  </div>
);

export default InputField;
