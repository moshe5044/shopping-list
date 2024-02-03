import React from "react";
import categories from "../../data/db";
import Category from "../Category";
import style from "./style.module.css";


const Categories = () => {
  const categoryOrder = ["dairy", "alcohol", "vegetables", "fruits"];

  return (
    <div>
      {categoryOrder.map((categoryName) => (
        <div key={categoryName}>
          <h1 className={style["categoryName"]}>{categoryName}</h1>
          <Category category={categories[categoryName]} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
