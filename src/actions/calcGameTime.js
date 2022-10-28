//in game day, 1 second  = 12 seconds in game
//in game night, 1 second = 24 seconds in game

let timesList = [
  {
    dayStart: {
      hour: 6,
      minute: 44,
    },
    nightStart: {
      hour: 7,
      minute: 44,
    },
  },
  {
    dayStart: {
      hour: 8,
      minute: 14,
    },
    nightStart: {
      hour: 9,
      minute: 14,
    },
  },
  {
    dayStart: {
      hour: 9,
      minute: 44,
    },
    nightStart: {
      hour: 10,
      minute: 44,
    },
  },
  {
    dayStart: {
      hour: 11,
      minute: 14,
    },
    nightStart: {
      hour: 12,
      minute: 14,
    },
  },
  {
    dayStart: {
      hour: 12,
      minute: 44,
    },
    nightStart: {
      hour: 1,
      minute: 44,
    },
  },
  {
    dayStart: {
      hour: 2,
      minute: 14,
    },
    nightStart: {
      hour: 3,
      minute: 14,
    },
  },
  {
    dayStart: {
      hour: 3,
      minute: 44,
    },
    nightStart: {
      hour: 4,
      minute: 44,
    },
  },
  {
    dayStart: {
      hour: 5,
      minute: 14,
    },
    nightStart: {
      hour: 6,
      minute: 14,
    },
  },
];

const calcGameTime = (timesList) => {
  let dt = new Date();
  let currentHour = dt.getHours();
  if (currentHour > 12) {
    currentHour -= 12;
  }
  let currentMinute = dt.getMinutes();
  let start = {}
  for (let index = 0; index < timesList.length; index++) {
    if (timesList[index].dayStart.hour === currentHour && timesList[index].dayStart.minute <= currentMinute) {
        start = timesList[index].dayStart
        break
    }
    if (timesList[index].dayStart.hour > currentHour && timesList[index-1].dayStart.hour < currentHour) {
        start = timesList[index].dayStart
        console.log(index)
        break
    }
  }
  console.log(start)
};

calcGameTime(timesList);
