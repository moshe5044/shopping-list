import React from "react";
import style from './style.module.css'

export default function PopupItem({ item, onClose }) {
  return (
    <div className={style["popupContainer"]}>
      <div className={style["item-img"]}>
        <button
          className={style["close"]}
          onClick={onClose}
        >
          <svg
            className={style["h-6 w-6"]}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2>
          {" "}
          <img src={item.image} alt={item.name} className="cursor-pointer" />
        </h2>

        <p className="text-gray-700">{item.price}</p>
      </div>
    </div>
  );
}
