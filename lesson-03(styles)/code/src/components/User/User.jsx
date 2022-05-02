import s from "./User.module.css";

const User = ({ name, email, age, friends, status }) => {
  return (
    <div className={s.container}>
      <span style={{ backgroundColor: status === "off" ? "red" : "green" }}>
        User is {status}
      </span>
      <p className="">Name: {name}</p>
      <p className="">email: {email}</p>
      <p className="">Age: {age}</p>
      <p className="">Friends: {friends}</p>
    </div>
  );
};

export default User;
