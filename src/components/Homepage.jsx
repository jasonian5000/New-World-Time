import React from "react";
import { useState } from "react";
import TimesDisplay from "./TimesDisplay";
import TimeSelectForm from "./TimeSelectForm";

export default function Homepage() {
  const [hourInput, setHourInput] = useState("12");
  const [minuteInput, setMinuteInput] = useState("00");
  return (
    <div>
      <TimeSelectForm hourInput={hourInput} setHourInput={setHourInput} minuteInput={minuteInput} setMinuteInput={setMinuteInput}/>
      <TimesDisplay hourInput={hourInput} minuteInput={minuteInput}/>
    </div>
  );
}
