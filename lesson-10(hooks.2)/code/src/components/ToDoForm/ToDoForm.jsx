import { useRef, useEffect, memo } from "react";
import { generate } from "shortid";
import { useTodosContext } from "../../context/TodosProvider";
import { useForm } from "../../hooks/useForm";
import { priorityOptions as statusOpts } from "../../data/priorityOptions";
import s from "./ToDoForm.module.scss";

// const hardCalc = () => {
//   let n = 0;
//   while (n < 1000000000) {
//     n++;
//   }
// };

const ToDoForm = ({ showValue }) => {
  const { addTodo } = useTodosContext();

  const { form, handleChange, handleSubmit } = useForm({
    initialValues: {
      date: "2022-05-09",
      title: "",
      descr: "",
      status: "",
    },
    cbOnSubmit: (formValues) => {
      addTodo({ ...formValues, id: generate() });
    },
  });
  const { date, title, descr, status } = form;

  const dateRef = useRef(null);

  console.log("RENDER_FORM");

  // hardCalc();

  useEffect(() => {
    showValue();
  }, [showValue]);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          ref={dateRef}
          className={s.input}
          onChange={handleChange}
          name="date"
          value={date}
          type="date"
        />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input
          className={s.input}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={descr}
          onChange={handleChange}
        />
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="status"
            value={statusOpts.LOW}
            checked={status === statusOpts.LOW}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
            Low
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioMedium"
            className={s.input}
            type="radio"
            name="status"
            value={statusOpts.MEDIUM}
            checked={status === statusOpts.MEDIUM}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
            Medium
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioHigh"
            className={s.input}
            type="radio"
            name="status"
            value={statusOpts.HIGH}
            checked={status === statusOpts.HIGH}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
            High
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        Ok
      </button>
    </form>
  );
};

export default memo(ToDoForm);
