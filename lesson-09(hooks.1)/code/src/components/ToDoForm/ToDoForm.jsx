import { useState } from "react";
import { generate } from "shortid";
import { useForm } from "../../hooks/useForm";
import s from "./ToDoForm.module.scss";

const statusOpts = {
  OPEN: "open",
  CLOSE: "close",
};

const ToDoForm = ({ addTodo }) => {
  // with switch
  // const [date, setDate] = useState("2022-05-09");
  // const [title, setTitle] = useState("");
  // const [descr, setDescr] = useState("");
  // const [status, setStatus] = useState("");
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "date":
  //       setDate(value);
  //       break;
  //     case "title":
  //       setTitle(value);
  //       break;
  //     case "descr":
  //       setDescr(value);
  //       break;
  //     case "status":
  //       setStatus(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // with switch -END

  // with initialFormValues
  // const [form, setForm] = useState({
  //   date: "2022-05-09",
  //   title: "",
  //   descr: "",
  //   status: "",
  // });
  // const [isRed, setIsRed] = useState(false);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm((prevForm) => {
  //     return {
  //       ...prevForm,
  //       [name]: value,
  //     };
  //   });
  // };
  // with initialFormValues - END

  // NOT TO DO
  //const [state, setState] = useState({
  //   date: "2022-05-09",
  //   title: "",
  //   descr: "",
  //   status: "",
  //   isRed: false,
  // }); - не вірно!!!
  // NOT TO DO -END

  // with useForm
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
  // with useForm -END
  const { date, title, descr, status } = form;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addTodo({
  //     ...form,
  //     id: generate(),
  //   });
  // };

  return (
    <form
      // style={{ background: isRed ? "red" : "white" }}
      className={s.form}
      onSubmit={handleSubmit}
    >
      <label className={s.label}>
        <span> Date </span>
        <input
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
          onChange={handleChange}
        />
      </label>

      <div className="labelWrapper">
        <label className="label radio">
          <span> Status close </span>
          <input
            className="input"
            type="radio"
            name="status"
            value={statusOpts.CLOSE}
            checked={status === statusOpts.CLOSE}
            onChange={handleChange}
          />
        </label>
        <label className="label radio">
          <span> Status open </span>
          <input
            className="input"
            type="radio"
            name="status"
            value={statusOpts.OPEN}
            checked={status === statusOpts.OPEN}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Ok</button>
    </form>
  );
};

// class ToDoForm extends Component {
//   #status = {
//     OPEN: "open",
//     CLOSE: "close",
//   };

//   state = {
//     date: "2022-01-01",
//     title: "",
//     descr: "",
//     status: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     // console.log("value :>> ", value);
//     // console.log("name :>> ", name);

//     // if (name === "title") {
//     //   if (value.length > 5) return;
//     // }

//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("this.state :>> ", this.state);
//     this.props.addTodo({ ...this.state, id: generate() });
//   };

//   render() {
//     const { date, title, descr } = this.state;

//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           <span> Date </span>
//           <input
//             className={s.input}
//             onChange={this.handleChange}
//             name="date"
//             value={date}
//             type="date"
//           />
//         </label>
//         <label className={s.label}>
//           <span> Title </span>
//           <input
//             className={s.input}
//             type="text"
//             name="title"
//             value={title}
//             onChange={this.handleChange}
//             // autoComplete="on"
//           />
//         </label>
//         <label className={s.label}>
//           <span> Description </span>
//           <input
//             className={s.input}
//             type="text"
//             name="descr"
//             value={descr}
//             onChange={this.handleChange}
//           />
//         </label>

//         <div className="labelWrapper">
//           <label className="label radio">
//             <span> Status close </span>
//             <input
//               className="input"
//               type="radio"
//               name="status"
//               value={this.#status.CLOSE}
//               checked={this.state.status === this.#status.CLOSE}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className="label radio">
//             <span> Status open </span>
//             <input
//               className="input"
//               type="radio"
//               name="status"
//               value={this.#status.OPEN}
//               checked={this.state.status === this.#status.OPEN}
//               onChange={this.handleChange}
//             />
//           </label>
//         </div>
//         <button type="submit">Ok</button>
//       </form>
//     );
//   }
// }

export default ToDoForm;
