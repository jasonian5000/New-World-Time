//in game day, 1 second  = 12 seconds in game
//in game night, 1 second = 24 seconds in game

let timesList = [
  {
    dayStart: {
      hour: 6,
      minute: 44,
      second: 00,
    },
    nightStart: {
      hour: 7,
      minute: 44,
      second: 00,
    },
  },
  {
    dayStart: {
      hour: 8,
      minute: 14,
      second: 00,
    },
    nightStart: {
      hour: 9,
      minute: 14,
      second: 00,
    },
  },
  {
    dayStart: {
      hour: 9,
      minute: 44,
      second: 00,
    },
    nightStart: {
      hour: 10,
      minute: 44,
      second: 00,
    },
  },
  {
    dayStart: {
      hour: 11,
      minute: 14,
      second: 00,
    },
    nightStart: {
      hour: 12,
      minute: 14,
      second: 00,
    },
  },
  {
    dayStart: {
      hour: 12,
      minute: 44,
      second: 00,
    },
    nightStart: {
      hour: 1,
      minute: 44,
      second: 00,
    },
  },
  {
    dayStart: {
      hour: 2,
      minute: 14,
      second: 00,
    },
    nightStart: {
      hour: 3,
      minute: 14,
      second: 00,
    },
  },
  {
    dayStart: {
      hour: 3,
      minute: 44,
      second: 00,
    },
    nightStart: {
      hour: 4,
      minute: 44,
      second: 00,
    },
  },
  {
    dayStart: {
      hour: 5,
      minute: 14,
      second: 00,
    },
    nightStart: {
      hour: 6,
      minute: 14,
      second: 00,
    },
  },
];

const findDayStartFloor = (timesList) => {
  let now = new Date();
  let currentHour = now.getHours();
  if (currentHour > 12) {
    currentHour -= 12;
  }
  let currentMinute = now.getMinutes();
  let currentSecond = now.getSeconds()
  let start = {};
  for (let index = 0; index < timesList.length; index++) {
    if (
      timesList[index].dayStart.hour === currentHour &&
      timesList[index].dayStart.minute <= currentMinute
    ) {
      start = timesList[index].dayStart;
      break;
    }
    if (timesList[index - 1]) {
      if (
        timesList[index].dayStart.hour > currentHour &&
        timesList[index - 1].dayStart.hour < currentHour
      ) {
        start = timesList[index - 1].dayStart;
        console.log(index);
        break;
      }
    }
    start = timesList[index].dayStart;
  }
  return { start, currentHour, currentMinute, currentSecond };
};

const calcGameTime = (timesList) => {
  let times = findDayStartFloor(timesList);
  let startHour = times.start.hour;
  let startMinute = times.start.minute;
  let startSecond = times.start.second;
  let currentHour = times.currentHour;
  let currentMinute = times.currentMinute;
  console.log(times);
};

calcGameTime(timesList);
