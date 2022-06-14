const minutesArray = [0];

const getMinutes = () => {
  for (let i = 1; i <= 60; ++i) {
    if (i.length < 2) {
      i = '0' + i;
    }
    minutesArray.push(i);
  }
};
getMinutes();

const zeroPad = (num, places) => String(num).padStart(places, '0');
export const MinutesArrayStartFromZero = minutesArray.map((num) =>
  zeroPad(num, 2)
);

export const hoursArray = [1];

const getHours = () => {
  for (let i = 2; i <= 2; ++i) {
    hoursArray.push(i);
  }
};
getHours();
