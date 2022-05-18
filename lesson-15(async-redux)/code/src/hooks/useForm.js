import { useState } from "react";

// {
//     date: "2022-05-09",
//     title: "",
//     descr: "",
//     status: "",
//   }

export const useForm = ({ initialValues, cbOnSubmit }) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  return { form, handleChange, handleSubmit };
};
