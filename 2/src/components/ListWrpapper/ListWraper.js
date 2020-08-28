import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWraper.module.scss";

const ListWrapper = (props) => (
  <ul className={styles.wrapper}>
    {props.items.map((item) => {
      <ListItem></ListItem>;
      console.log(item);
    })}
  </ul>
);
export default ListWrapper;
