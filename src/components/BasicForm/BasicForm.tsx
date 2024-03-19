import { ChangeEvent, FC, FormEvent, useState } from "react";

type BasicFormProps = {};

type FormDataType = {
  [key: string]: string;
};

const initialValues: FormDataType = {
  name: "",
  email: "",
};

const BasicForm: FC<BasicFormProps> = ({}) => {
  const [formData, setFormData] = useState<FormDataType>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted formData: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData["name"]}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData["email"]}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
