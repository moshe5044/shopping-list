import React from "react";
import style from "./style.module.css";

export default function Header() {
  return (
    <div className={style["header"]}>
      <div className={style["my-cart"]}>my cart</div>
      <div className={style["my-stock"]}>my stock</div>
    </div>
  );
}
