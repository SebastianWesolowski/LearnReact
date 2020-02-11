import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form//Form";
import Button from "../Button/Button";
const Modal = ({ closeModalFn, ...props }) => (
  <div className={styles.wrapper} {...props}>
    <Button onClick={closeModalFn}>x</Button>
    <Form />
  </div>
);
export default Modal;
