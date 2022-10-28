export const populateTimesDisplay = (hour, minute, second) => {
  let state = [];
  let currentHour = Number(hour);
  let currentMinute = Number(minute);
  for (let index = 0; index < 8; index++) {
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
      dayStart: { hour: currentHour, minute: currentMinute, second: second },
      nightStart: {
        hour: currentHour === 12 ? 1 : currentHour + 1,
        minute: currentMinute, second: second,
      },
    });
  }
  return state;
};
