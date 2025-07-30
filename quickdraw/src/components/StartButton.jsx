import React, { useState } from "react";

const StartButton = ({ btnType, onClick }) => {

    const [circle, setCircle] = useState(null);


    return (
        <>
            <button type="submit" onClick={onClick}>
                {btnType === 'start' ? "Click to begin" : "Try Again"}
            </button>
        </>
    );
}

export default StartButton;