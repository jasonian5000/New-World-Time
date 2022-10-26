import { useState } from "react";
import { makeDropDown } from "../actions/makeDropDown";

export default function TimeSelectForm() {
  const hourList = makeDropDown(1, 12);
  const minuteList = makeDropDown(0, 60);
  const [hourInput, setHourInput] = useState('12')
  const [minuteInput, setMinuteInput] = useState('00')
  const [dayNightInput, setDayNightInput] = useState('AM')
  return (
    <div>
      <form>
        <select
          name="hour"
          value={hourInput}
          onChange={(e) => setHourInput(e.target.value)}
        >
          {hourList.map((hour) => (
            <option value={hour.value}>{hour.value}</option>
          ))}
        </select>
        <select
          name="minute"
          value={minuteInput}
          onChange={(e) => setMinuteInput(e.target.value)}
        >
          {minuteList.map((minute) => (
            <option
              value={minute.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            >
              {minute.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </option>
          ))}
        </select>
        <select name="am-pm" value={dayNightInput} onChange={e => setDayNightInput(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </form>
    </div>
  );
}
