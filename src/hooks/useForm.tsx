import { ChangeEvent, useState } from "react";

export function useForm<T>(initialValues: T) {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetForm = () => setFormData(initialValues);

  return { formData, handleChange, resetForm };
}
