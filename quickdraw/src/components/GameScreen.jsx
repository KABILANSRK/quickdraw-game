import React, { useState, useRef } from "react";
import StartButton from "./StartButton";
import './GameScreen.css';

const GameScreen = () => {

    const [gameState, setGameState] = useState("initial");
    const [reactionTime, setReactionTime] = useState(null);
    const timeoutRef = useRef(null);
    const startTimeRef = useRef(null);

    const startGame = () => {
        setGameState("waiting");
        const delay = Math.floor(Math.random() * 3000) + 2000;

        timeoutRef.current = setTimeout(() => {
            setGameState("ready");
            startTimeRef.current = Date.now();
        }, delay);
    };

    const handleScreenClick = () => {
        if (gameState === "waiting") {
            clearTimeout(timeoutRef.current);
            setGameState("tooSoon");
        } else if (gameState === "ready") {
            const endTime = Date.now();
            const reaction = endTime - startTimeRef.current;
            setReactionTime(reaction);
            setGameState("result");
        }
    };

    const resetGame = () => {
        setGameState("initial");
        setReactionTime(null);
    };


    return (
        <div 
            className={`gamescreen-container ${gameState === "ready" ? "ready" : ""} ${gameState === "tooSoon" ? "tooSoon" : ""}`}
            onClick={handleScreenClick}
        >
            { gameState === "initial" && (
                <StartButton btnType="start" onClick={startGame} className="start-btn" />
            )}
            { gameState === "waiting" && <p>Wait for green...</p> }
            { gameState === "ready" && <p>CLICK NOW!</p> }
            { gameState === "tooSoon" && (
                <div>
                    <p>Too Soon</p>
                    <StartButton btnType="retake" onClick={resetGame} className="start-btn" />
                </div>
            )}
            { gameState === "result" && (
                <div>
                    <p>Your Reaction Time: {reactionTime}</p>
                    <StartButton btnType="retake" onClick={resetGame} className="start-btn" />
                </div>
            )}
        </div>
    );
}

export default GameScreen;