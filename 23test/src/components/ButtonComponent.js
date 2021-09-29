import React from 'react';
import "../App.css";

export default function Button({ buttonName, onClick }) {
    return (
        <>
            <button className="buttonComponent" onClick={onClick}>
                {buttonName}
            </button>
        </>
    )
}