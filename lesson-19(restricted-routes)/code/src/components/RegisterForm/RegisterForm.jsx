import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authOperations";
import { registerUserApi } from "../../utils/firebaseApi";
import s from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });

  const { email, password, confirm } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // registerUserApi(form).then((data) => console.log(data));
    const { confirm, ...dataForm } = form;
    dispatch(registerUser(dataForm));
  };

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
      <label className={s.label}>
        <span> Confirm Password </span>
        <input
          className={s.input}
          type="text"
          name="confirm"
          placeholder="Confirm password"
          value={confirm}
          onChange={handleChange}
        />
      </label>
      <button className={s.submit} type="submit">
        Ok
      </button>
    </form>
  );
};

export default RegisterForm;
