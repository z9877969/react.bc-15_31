import { Component } from "react";
import { generate } from "shortid";
import s from "./ToDoForm.module.scss";

class ToDoForm extends Component {
  #status = {
    OPEN: "open",
    CLOSE: "close",
  };

  state = {
    date: "2022-01-01",
    title: "",
    descr: "",
    status: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("value :>> ", value);
    // console.log("name :>> ", name);

    // if (name === "title") {
    //   if (value.length > 5) return;
    // }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this.state :>> ", this.state);
    this.props.addTodo({ ...this.state, id: generate() });
  };

  render() {
    const { date, title, descr } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
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
            // autoComplete="on"
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

        <div className="labelWrapper">
          <label className="label radio">
            <span> Status close </span>
            <input
              className="input"
              type="radio"
              name="status"
              value={this.#status.CLOSE}
              checked={this.state.status === this.#status.CLOSE}
              onChange={this.handleChange}
            />
          </label>
          <label className="label radio">
            <span> Status open </span>
            <input
              className="input"
              type="radio"
              name="status"
              value={this.#status.OPEN}
              checked={this.state.status === this.#status.OPEN}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit">Ok</button>
      </form>
    );
  }
}

export default ToDoForm;
