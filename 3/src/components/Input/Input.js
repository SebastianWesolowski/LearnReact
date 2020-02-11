import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, maxLength, label, ...props }) => {
  return (
    <div className={styles.formItem}>
      <Tag
        {...props}
        className={Tag === "textarea" ? styles.textarea : styles.input}
        type="text"
        name={name}
        id={name}
        maxLength={maxLength}
        placeholder=" "
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.formItemBar} />
    </div>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

Input.defaultProps = {
  tag: "input",
  maxLength: 200
};

export default Input;
