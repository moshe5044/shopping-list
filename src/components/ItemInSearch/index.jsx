import React from "react";
import style from "./style.module.css";


export default function ItemInSearch({ item }) {

  return (
    <div className={style["item"]}>
      <div className={style["emoji"]}>{item.emoji}</div>
      <div className={style["name"]}>{item.name}</div>
      <div className={style["category"]}>{item.category}</div>
    </div>
  );
}
