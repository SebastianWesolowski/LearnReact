import React from "react";
import PropsTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";
import Title from "../../Title/Title";
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
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={twitterLink}>visit twitter page</Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropsTypes.string,
  name: PropsTypes.string.isRequired,
  description: PropsTypes.string,
  twitterLink: PropsTypes.string.isRequired,
};
ListItem.defaultProps = {
  description: "One of the React Crator",
  image: null,
};
export default ListItem;
