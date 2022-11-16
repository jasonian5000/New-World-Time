import { makeDropDown } from "../actions/makeDropDown";
import "../css/TimeSelectForm.css";

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
  } = props.props;

  return (
    <div>
      <h3>Select the start of day:</h3>
      <form>
        <select
          className="dropdown_select"
          name="hour"
          value={hourInput}
          onChange={(e) => {
            setHourInput(e.target.value);
            localStorage.setItem("hour", e.target.value);
          }}
        >
          {hourList.map((hour) => (
            <option
              className="dropdown_item"
              value={hour.value}
              key={hour.value}
            >
              {hour.value}
            </option>
          ))}
        </select>
        <select
          className="dropdown_select"
          name="minute"
          value={minuteInput}
          onChange={(e) => {
            setMinuteInput(e.target.value);
            localStorage.setItem("minute", e.target.value);
          }}
        >
          {minuteList.map((minute) => (
            <option
              className="dropdown_item"
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
          className="dropdown_select"
          name="second"
          value={secondInput}
          onChange={(e) => {
            setSecondInput(e.target.value);
            localStorage.setItem("second", e.target.value);
          }}
        >
          {secondList.map((second) => (
            <option
              className="dropdown_item"
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
