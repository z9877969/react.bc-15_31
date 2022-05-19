import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.todos.error);
  return <h1>{error}</h1>;
};

export default Error;
