import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { loginUser } from "../../redux/auth/authOperations";
import s from "./LoginForm.module.scss";

const LoginForm = () => {
  const disapatch = useDispatch();
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    cbOnSubmit: (dataForm) => disapatch(loginUser(dataForm)),
  });
  const { email, password } = form;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Email </span>
        <input
          className={s.input}
          type="text"
          name="email"
          placeholder="Input email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Password </span>
        <input
          className={s.input}
          type="text"
          name="password"
          placeholder="Input password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className={s.submit} type="submit">
        Ok
      </button>
    </form>
  );
};

export default LoginForm;
