import React, { useState } from "react";
import "./EightBall.css"; 
import Answers from "./Answers";

const EightBall = (props) => {
    const [message, setMessage] = useState("Click the button to reveal a message");
    const [backgroundColor, setBackgroundColor] = useState("black");

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * Answers.messages.length);
        const selectedMessage = Answers.messages[randomIndex];
        setMessage(selectedMessage.msg);
        setBackgroundColor(selectedMessage.color);
    };

    return (
        <div className="eightBall" >
            <button className="eightBallButton" style={{ backgroundColor }} onClick={handleClick}>{message}</button>
        </div>
    );
}

export default EightBall;
