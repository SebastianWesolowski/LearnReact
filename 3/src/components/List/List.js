import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({ items }) => {
  return (
    <>
      {items.lenght ? (
        <ul className={styles.wrapper}>
          {items.map(item => (
            <ListItem key={item.title} {...item} />
          ))}
        </ul>
      ) : (
        <h1>Add smoe notes</h1>
      )}
    </>
  );
};
export default List;
