import s from "./AuthForm.module.scss";

const AuthForm = () => {
  return (
    <form className={s.form} onSubmit={null}>
      <label className={s.label}>
        <span> Email </span>
        <input
          className={s.input}
          type="text"
          name="email"
          value={""}
          placeholder="Input email"
          onChange={null}
        />
      </label>
      <label className={s.label}>
        <span> Password </span>
        <input
          className={s.input}
          type="text"
          name="password"
          value={""}
          placeholder="Input password"
          onChange={null}
        />
      </label>
      <button className={s.submit} type="submit">
        Ok
      </button>
    </form>
  );
};

export default AuthForm;
