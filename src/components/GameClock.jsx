import { useEffect } from "react";
import { useState } from "react";
import { calcGameTime } from "../actions/calcGameTime";

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
      <p>Sunrise:</p>
      <p>7:00-7:45 AM</p>
      <h1>
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
      <p>Sunset:</p>
      <p>6:15-7:00 PM</p>
    </div>
  );
}
