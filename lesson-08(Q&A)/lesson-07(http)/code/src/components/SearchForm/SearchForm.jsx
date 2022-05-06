import { Component } from "react";
import s from "./SearchForm.module.scss";

class SearchForm extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeSearch(this.state.input);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          className={s.input}
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
