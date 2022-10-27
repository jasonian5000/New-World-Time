import React from "react";
import { useState } from "react";
import TimesDisplay from "./TimesDisplay";
import TimeSelectForm from "./TimeSelectForm";

export default function Homepage() {
  const [hourInput, setHourInput] = useState(localStorage.getItem("hour"));
  const [minuteInput, setMinuteInput] = useState(localStorage.getItem("minute"));
  return (
    <div>
      <TimeSelectForm hourInput={hourInput} setHourInput={setHourInput} minuteInput={minuteInput} setMinuteInput={setMinuteInput}/>
      <TimesDisplay hourInput={hourInput} minuteInput={minuteInput}/>
    </div>
  );
}
