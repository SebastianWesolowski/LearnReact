import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ children, href, secondary, ...props }) => {
  const ButtonClass = secondary ? styles.secondary : styles.button;

  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={ButtonClass}
        >
          {children}
        </a>
      ) : (
        <button className={ButtonClass} type="submit" {...props}>
          {children}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  secondary: PropTypes.bool
};

export default Button;
