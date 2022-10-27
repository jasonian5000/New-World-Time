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
let currentHour = 6
let currentMinute = 32
export const calcGameTime = (currentHour, currentMinute, timesList) => {

}