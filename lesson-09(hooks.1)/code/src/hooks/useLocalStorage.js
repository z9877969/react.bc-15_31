import { useEffect, useState } from "react";

export const useLocalStorage = ({ key, initialValue }) => {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );

  console.log("useLocalStorage");

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

// const fn = () => {
//   let a = 0;

//   const changeA = (n) => (a += n);
//   const showA = () => console.log("a :>> ", a);

//   return [changeA, showA];
// };

// const [change1, show1] = fn();
// const [change2, show2] = fn();

// change1(2);
// show1();
