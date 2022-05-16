import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./SearchForm.module.scss";

const SearchForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // "/news/search?query=cat"
    navigate({
      pathname: "/news/search",
      search: "query=" + input,
    });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        value={input}
        className={s.input}
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
