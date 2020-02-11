import React from "react";
import PropsTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";
const ListItem = ({ image, title, description, link }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      {image && (
        <ImageTag
          src={image}
          alt={title}
          className={image ? styles.image : styles.imageNone}
        />
      )}
      <div>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
        {link && <Button href={link}>visit twitter page</Button>}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string.isRequired,
  link: PropsTypes.string,
  image: PropsTypes.string
};
ListItem.defaultProps = {
  link: null,
  image: null
};
export default ListItem;
