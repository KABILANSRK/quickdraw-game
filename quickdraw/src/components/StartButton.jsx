import React from "react";

const StartButton = ({ btnType, onClick }) => {

    return (
        <>
            <button type="submit" onClick={onClick}>
                {btnType === 'start' ? "Click to begin" : "Try Again"}
            </button>
        </>
    );
}

export default StartButton;