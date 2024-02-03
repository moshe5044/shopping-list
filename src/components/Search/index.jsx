import React, { useState } from "react";
import data from "../../data/db";
import style from "./style.module.css";
import ItemInSearch from "../ItemInSearch";

export default function Search() {
  const [filteredItems, setFilteredItems] = useState([]);

  const productsArray = Object.values(data.products);

  function handleSearch(e) {
    if (e) {
      const filter = productsArray.filter(
        (item) => item.name && item.name.toLowerCase().includes(e.toLowerCase())
      );
      setFilteredItems(filter);
    } else {
      setFilteredItems([]);
    }
  }

  return (
    <div>
      <input
        className={style["search-input"]}
        type="text"
        placeholder="Search by name..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className={style["item"]}>
        {filteredItems.map((item, index) => (
          <ItemInSearch key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
