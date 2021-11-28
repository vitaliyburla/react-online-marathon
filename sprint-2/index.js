//Task 1
const filterNums = (arr, num = 0, par = "greater") => {
  if (par === "greater") {
    return arr.filter((elem) => elem > num);
  } else if (par === "less") {
    return arr.filter((elem) => elem < num);
  }
};

//Task 2
const howMuchSec = (...arr) => {
  const [
    seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0,
    weeks = 0,
    months = 0,
    years = 0,
  ] = arr;
  return (
    seconds +
    minutes * 60 +
    hours * 3600 +
    days * 24 * 3600 +
    weeks * 7 * 24 * 3600 +
    months * 30 * 24 * 3600 +
    years * 365 * 24 * 3600
  );
};

//Task 3
const maxInterv = (...arr) => {
  let interval = 0;
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i + 1] - arr[i]);
    interval = diff > interval ? diff : interval;
  }
  return interval;
};

//Task 4
const sumOfLen = (...arr) => {
  return arr.reduce((curr, next) => curr + next.length, 0);
};

//Task 5
const combineFunctions = (...arr) => {
  return (x) => arr.reverse().reduceRight((curr, next) => next(curr), x);
};

//Task 6
const getLanguages = (students, func = (student) => student) => {
  return students
    .filter(func)
    .map((student) => student.languages)
    .flat();
};
