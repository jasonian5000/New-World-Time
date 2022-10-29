import { makeDropDown } from "../actions/makeDropDown";

export default function TimeSelectForm(props) {
  const hourList = makeDropDown(1, 12);
  const minuteList = makeDropDown(0, 59);
  const secondList = makeDropDown(0, 59);
  let {
    hourInput,
    setHourInput,
    minuteInput,
    setMinuteInput,
    secondInput,
    setSecondInput,
  } = props.timeSelections;

  return (
    <div>
      <h1>New World Clock</h1>
      <h3>Select the start of day:</h3>
      <form>
        <select
          name="hour"
          value={hourInput}
          onChange={(e) => {
            setHourInput(e.target.value);
            localStorage.setItem("hour", e.target.value);
          }}
        >
          {hourList.map((hour) => (
            <option value={hour.value} key={hour.value}>
              {hour.value}
            </option>
          ))}
        </select>
        <select
          name="minute"
          value={minuteInput}
          onChange={(e) => {
            setMinuteInput(e.target.value);
            localStorage.setItem("minute", e.target.value);
          }}
        >
          {minuteList.map((minute) => (
            <option
              value={minute.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              key={minute.value}
            >
              {minute.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
            </option>
          ))}
        </select>
        <select
          name="second"
          value={secondInput}
          onChange={(e) => {
            setSecondInput(e.target.value);
            localStorage.setItem("second", e.target.value);
          }}
        >
          {secondList.map((second) => (
            <option
              value={second.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              key={second.value}
            >
              {second.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
