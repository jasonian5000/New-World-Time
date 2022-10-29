const findDayStartFloor = (timesList) => {
  let now = new Date();
  let current = {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
  if (current.hour > 12) {
    current.hour -= 12;
  }
  let start = {};
  for (let index = 0; index < timesList.length; index++) {
    let time = timesList[index].dayStart;
    let prev = timesList[index - 1]?.dayStart;
    if (time.hour === current.hour && time.minute <= current.minute) {
      start = time;
      break;
    }
    if (prev) {
      if (
        (time.hour > current.hour && prev.hour < current.hour) ||
        (time.hour === current.hour && time.minute > current.minute) || (time.hour > current.hour && prev.hour === 12)
      ) {
        start = prev;
        break;
      }
    }
    start = time;
  }
  return { start, current };
};

const calcDiffSeconds = (timesList) => {
  let { start, current } = findDayStartFloor(timesList);
  let diffSeconds = 0;
  if (start.hour === current.hour) {
    diffSeconds +=
      (current.minute - start.minute) * 60 + (current.second - start.second);
  }
  if ((start.hour < current.hour) || (start.hour === 12)) {
    diffSeconds +=
      (59 - start.minute) * 60 +
      current.minute * 60 +
      (60 - start.second + current.second);
  }
  if (current.hour - start.hour === 2 || current.hour - start.hour === -10) {
    diffSeconds += 60 * 60;
  }
  return diffSeconds;
};
export const calcGameTime = (timesList) => {
  let diffSeconds = calcDiffSeconds(timesList);
  let gameTime = 60 * 60 * 7;
  let dayNight = "AM";
  if (diffSeconds <= 60 * 60) {
    gameTime += diffSeconds * 12;
  } else {
    gameTime += 60 * 60 * 12 + (diffSeconds - 60 * 60) * 24;
  }
  if (gameTime > 60 * 60 * 12) {
    dayNight = "PM";
  }
  if (gameTime > 60 * 60 * 24) {
    dayNight = "AM";
  }
  let gameHours = Math.floor(gameTime / 60 / 60);
  if (gameHours === 0) {
    gameHours = 12;
  }
  if (gameHours > 24) {
    gameHours -= 24;
  }
  if (gameHours > 12) {
    gameHours -= 12;
  }
  let gameMinutes = Math.floor((gameTime / 60) % 60);
  let gameSeconds = Math.floor((gameTime % 60) % 60);
  return { gameHours, gameMinutes, gameSeconds, dayNight };
};
