import React from "react";
import style from "./style.module.css";

export default function ItemInSearch({ item }) {
  return (
    <div className={style["item"]}>
      <div className={style["photo"]}>
        <img className={style["img-item"]} src={item.image} />
      </div>
      <div className={style["name"]}>{item.name}</div>
    </div>
  );
}
