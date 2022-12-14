import { useEffect } from "react";
import { useState } from "react";
import { createTimesList } from "../actions/createTimesList";
import DonateButton from "./DonateButton";
import GameClock from "./GameClock";
import TimesDisplay from "./TimesDisplay";
import TimeSelectForm from "./TimeSelectForm";

export default function Homepage() {
  const [hourInput, setHourInput] = useState(localStorage.getItem("hour"));
  const [minuteInput, setMinuteInput] = useState(
    localStorage.getItem("minute")
  );
  const [secondInput, setSecondInput] = useState(
    localStorage.getItem("second")
  );
  const [timesList, setTimesList] = useState(
    createTimesList(hourInput, minuteInput, secondInput)
  );
  let props = {
    hourInput,
    setHourInput,
    minuteInput,
    setMinuteInput,
    secondInput,
    setSecondInput,
  };
  useEffect(() => {
    setTimesList(createTimesList(hourInput, minuteInput, secondInput));
  }, [hourInput, minuteInput, secondInput]);
  return (
    <div>
      <TimeSelectForm props={props} />
      <GameClock timesList={timesList} />
      <TimesDisplay timesList={timesList} />
      <DonateButton />
    </div>
  );
}
