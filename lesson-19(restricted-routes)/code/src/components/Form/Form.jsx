import { useForm } from "../../hooks/useForm";

const Form = ({
  formOptions,
  formValues,
  moduleStyles: s = {},
  cbOnSubmit,
}) => {
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: formValues,
    cbOnSubmit: (formValues) => {
      cbOnSubmit(formValues);
    },
  });

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {formOptions.map(({ title, name }) => (
        <label key={name} className={s.label}>
          {title}
          <input
            className={s.input}
            type="text"
            name={name}
            value={form[name]}
            onChange={handleChange}
          />
        </label>
      ))}
      <button type="submit" className={s.btnSubmit}>
        Ok
      </button>
    </form>
  );
};

export default Form;
