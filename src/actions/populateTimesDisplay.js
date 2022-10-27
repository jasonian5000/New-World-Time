export const populateTimesDisplay = (hour, minute) => {
  let state = [];
  let currentHour = Number(hour);
  let currentMinute = Number(minute);
  for (let index = 0; index < 7; index++) {
    if (currentMinute < 30) {
      currentHour += 1;
      currentMinute += 30;
    } else {
      currentHour += 2;
      currentMinute -= 30;
    }
    if (currentHour > 12) {
      currentHour -= 12;
    }
    state.push({
      dayStart: `${currentHour}:${currentMinute.toLocaleString("en-US", {
        minimumIntegerDigits: 2
      })}`,
      nightStart: `${(currentHour === 12) ? 1 : currentHour + 1}:${currentMinute.toLocaleString("en-US", {
        minimumIntegerDigits: 2
      })}`,
    });
  }
  return state;
};
