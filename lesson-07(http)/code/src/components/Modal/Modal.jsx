import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.getElementById("modal");

// ()
class Modal extends Component {
  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }

  render() {
    const { modalNews, closeModal } = this.props;
    return createPortal(
      <div className={s.backdrop} onClick={(e) => closeModal()}>
        <h1 className={s.title}>{modalNews}</h1>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
