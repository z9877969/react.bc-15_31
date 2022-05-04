import { Component } from "react";
import { generate } from "shortid";
import s from "./ToDoForm.module.scss";

class ToDoForm extends Component {
  #status = {
    LOW: "lowlo",
    MEDIUM: "medium",
    HIGH: "high",
  };

  state = {
    date: "2022-01-01",
    title: "",
    descr: "",
    status: "",
    selectName: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: generate() });
  };

  render() {
    const { date, title, descr, status, selectName } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <select
          name="selectName"
          value={selectName}
          onChange={this.handleChange}
        >
          <option value="o-1">Option-1</option>
          <option value="o-2">Option-2</option>
          <option value="o-3">Option-3</option>
        </select>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={descr}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="status"
              value={this.#status.LOW}
              checked={status === this.#status.LOW}
              onChange={this.handleChange}
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
              value={this.#status.MEDIUM}
              checked={status === this.#status.MEDIUM}
              onChange={this.handleChange}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="status"
              value={this.#status.HIGH}
              checked={status === this.#status.HIGH}
              onChange={this.handleChange}
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
  }
}

export default ToDoForm;
