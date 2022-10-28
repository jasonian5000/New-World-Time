//in game day, 1 second  = 12 seconds in game
//in game night, 1 second = 24 seconds in game

let timesList = [
  {
    dayStart: {
      hour: 6,
      minute: 30,
      second: 0,
    },
    nightStart: {
      hour: 7,
      minute: 30,
      second: 0,
    },
  },
  {
    dayStart: {
      hour: 8,
      minute: 0,
      second: 0,
    },
    nightStart: {
      hour: 9,
      minute: 0,
      second: 0,
    },
  },
  {
    dayStart: {
      hour: 9,
      minute: 30,
      second: 0,
    },
    nightStart: {
      hour: 10,
      minute: 30,
      second: 0,
    },
  },
  {
    dayStart: {
      hour: 11,
      minute: 0,
      second: 0,
    },
    nightStart: {
      hour: 12,
      minute: 0,
      second: 0,
    },
  },
  {
    dayStart: {
      hour: 12,
      minute: 30,
      second: 0,
    },
    nightStart: {
      hour: 1,
      minute: 30,
      second: 0,
    },
  },
  {
    dayStart: {
      hour: 2,
      minute: 0,
      second: 0,
    },
    nightStart: {
      hour: 3,
      minute: 0,
      second: 0,
    },
  },
  {
    dayStart: {
      hour: 3,
      minute: 30,
      second: 0,
    },
    nightStart: {
      hour: 4,
      minute: 30,
      second: 0,
    },
  },
  {
    dayStart: {
      hour: 5,
      minute: 0,
      second: 0,
    },
    nightStart: {
      hour: 6,
      minute: 0,
      second: 0,
    },
  },
];

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
        (time.hour === current.hour && time.minute > current.minute)
      ) {
        start = prev;
        break;
      }
    }
    start = time;
  }
  return { start, current };
};

const calcGameTime = (timesList) => {
  let { start, current } = findDayStartFloor(timesList);
  let diffSeconds = 0;
  if (start.hour === current.hour) {
    diffSeconds +=
      (current.minute - start.minute) * 60 + (current.second - start.second);
  }
  if (start.hour < current.hour) {
    diffSeconds +=
      (59 - start.minute) * 60 +
      current.minute * 60 +
      (60 - start.second + current.second);
  }
  if (current.hour - start.hour === 2) {
    diffSeconds += 60 * 60;
  }
  console.log("current: ", current);
  console.log("start: ", start);
  console.log("difference: ", diffSeconds);
  console.log('minutes: ', Math.floor(diffSeconds/60))
  console.log('seconds: ', diffSeconds%60)
};

calcGameTime(timesList);
