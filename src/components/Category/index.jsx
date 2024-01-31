import React from "react";
import style from "./style.module.css";

export default function Category({ category }) {
  return (
    <div className={style["category"]}>
      <button className={style["plus"]}>+</button>
      {category.map((item, index) => (
        <div className={style["category-item"]} key={index}>
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
