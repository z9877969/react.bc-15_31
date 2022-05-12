import { useEffect, useState } from "react";
import Counter from "../components/Counter/Counter";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const fn = (e) => {
      if (e.code === "Escape") {
        console.log("Escape");
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [counter]);

  return <Counter />;
};

export default CounterPage;
