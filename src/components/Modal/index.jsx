import React from 'react';
import style from "./style.module.css";

export default function Modal({ selectedItem, closeModal }) {
    return (
        <div className={style["modalBackground"]} onClick={closeModal}>
            <div className={style["modalContainer"]} onClick={(e) => e.stopPropagation()}>
                <div className={style["titleCloseBtn"]}>
                    <button onClick={closeModal}> X </button>
                </div>
                
                <div className={style["body"]}>
                    {selectedItem && (
                        <img
                            className={style["img-item"]}
                            src={selectedItem.image}
                            alt={`Image`}
                        />
                    )}
                </div>
                <div className={style["footer"]}>
                    <button id={style["cancelBtn"]} onClick={closeModal}>Cancel</button>
                    {/* Continue button functionality can be added here */}
                    <button onClick={() => console.log("Continue clicked")}>Continue</button>
                </div>
            </div>
        </div>
    )
}
