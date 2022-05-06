import s from "./Button.module.scss";

const Button = ({ handleMoreNews }) => {
  return (
    <button className={s.btn} type="button" onClick={handleMoreNews}>
      More
    </button>
  );
};

export default Button;
