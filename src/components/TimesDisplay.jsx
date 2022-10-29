import "../css/TimesDisplay.css"

export default function TimesDisplay(props) {
  return (
    <div className="display_wrapper">
      <div className="display_columns">
        <div className="day_column">
          <h3>Day Start Times</h3>
          {props.timesList.map((times) => (
            <p key={times.dayStart.hour}>
              {times.dayStart.hour}:
              {times.dayStart.minute.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              :
              {times.dayStart.second.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
            </p>
          ))}
        </div>
        <div className="night_column">
          <h3>Night Start Times</h3>
          {props.timesList.map((times) => (
            <p key={times.nightStart.hour}>
              {times.nightStart.hour}:
              {times.nightStart.minute.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              :
              {times.nightStart.second.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
