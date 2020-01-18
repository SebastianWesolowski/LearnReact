import React from "react";
import PropsTypes from "prop-types";
import styles from "./ListItem.module.scss";

const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        alt={name}
        className={image ? styles.image : styles.imageNone}
      />
      <div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <a
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          visit twitter page
        </a>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropsTypes.string,
  name: PropsTypes.string.isRequired,
  description: PropsTypes.string,
  twitterLink: PropsTypes.string.isRequired
};
ListItem.defaultProps = {
  description: "One of the React Crator",
  image: null
};
export default ListItem;
