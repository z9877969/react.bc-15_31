import { useForm } from "../../hooks/useForm";

const Form = ({ formOptions, formValues }) => {
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: formValues,
    cbOnSubmit: (formValues) => {
      console.log("formValues :>> ", formValues);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      {formOptions.map(({ title, name }) => (
        <label key={name}>
          {title}
          <input
            type="text"
            name={name}
            value={form[name]}
            onChange={handleChange}
          />
        </label>
      ))}
      <button type="submit">Ok</button>
    </form>
  );
};

export default Form;
