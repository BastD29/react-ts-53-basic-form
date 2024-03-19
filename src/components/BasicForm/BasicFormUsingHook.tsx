import { /* ChangeEvent, */ FC, FormEvent /* useState */ } from "react";
import { useForm } from "../../hooks/useForm";
import InputField from "../InputField/InputField";

type BasicFormUsingHookProps = {};

type FormDataType = {
  [key: string]: string;
};

const initialValues: FormDataType = {
  name: "",
  email: "",
};

const BasicFormUsingHook: FC<BasicFormUsingHookProps> = ({}) => {
  const { formData, handleChange, resetForm } =
    useForm<FormDataType>(initialValues);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted formData: ", formData);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicFormUsingHook;
