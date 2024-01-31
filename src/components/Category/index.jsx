import React, { useState } from "react";
import style from "./style.module.css";
import PopupItem from "../PopupItem";

export default function Category({ category }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className={style["category"]}>
      <button className={style["plus"]}>+</button>
      {category.map((item, index) => (
        <div className={style["category-item"]} key={index}>
          <img
            className={style["img-item"]}
            src={item.image}
            alt={`Image ${index}`}
            onClick={handleItemClick}
          />
        </div>
      ))}
      {selectedItem && (
        <PopupItem item={selectedItem} onClose={handleClosePopup} />
      )}
    </div>
  );
}
