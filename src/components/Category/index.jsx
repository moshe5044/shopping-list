import React, { useState } from "react";
import style from "./style.module.css";
import Modal from "../Modal";

export default function Category({ category }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setOpenModal(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setOpenModal(false);
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
                        onClick={() => handleItemClick(item)}
                    />
                </div>
            ))}

            {openModal && (
                <Modal selectedItem={selectedItem} closeModal={closeModal} />
            )}
        </div>
    );
}
