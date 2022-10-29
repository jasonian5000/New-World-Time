import { useEffect } from "react";
import { useState } from "react";
import { calcGameTime } from "../actions/calcGameTime";
import "../css/GameClock.css"

export default function GameClock(props) {
  const [gameTime, setGameTime] = useState(calcGameTime(props.timesList));
  useEffect(() => {
    const interval = setInterval(() =>
      setGameTime(calcGameTime(props.timesList)), 1000);
      return () => {
        clearInterval(interval)
      }
  }, [props.timesList])

  return (
    <div>
      <h1>In-Game Clock</h1>
      <div className="clock_wrapper">
        <div className="sunrise">
          <p>Sunrise:</p>
          <p>7:00-7:45 AM</p>
        </div>
        <h1 className="clock_display">
          {gameTime.gameHours}:
          {gameTime.gameMinutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
          :
          {gameTime.gameSeconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}{" "}
          {gameTime.dayNight}
        </h1>
        <div className="sunset">
          <p>Sunset:</p>
          <p>6:15-7:00 PM</p>
        </div>
      </div>
    </div>
  );
}
