//Task 1
function getModifiedArray(array) {
  const arr = [...array];
  arr[0] = "Start";
  arr[arr.length - 1] = "End";
  return arr;
}

//Task 2
function combineArray(arr1, arr2) {
  const numberArr1 = arr1.filter((x) => typeof x === "number");
  const numberArr2 = arr2.filter((x) => typeof x === "number");
  return numberArr1.concat(numberArr2);
}

//Task 3
function longestLogin(loginList) {
  const longest = loginList.reduce((current, next) =>
    current.length > next.length ? current : next
  );
  return longest;
}

//Task 4
function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
function processArray(arr, factorial) {
  return arr.map((x) => factorial(x));
}

//Task 5
function checkAdult(age) {
  try {
    if (age === undefined) {
      throw new Error("Please, enter your age");
    } else if (age < 0) {
      throw new Error("Please, enter positive number");
    } else if (typeof age !== "number") {
      throw new Error("Please, enter number");
    } else if (!Number.isInteger(age)) {
      throw new Error("Please, enter Integer number");
    } else if (age < 18) {
      throw new Error("Access denied - you are too young!");
    } else {
      console.log("Access allowed");
    }
  } catch (e) {
    console.log(`${e.name} ${e.message}`);
  } finally {
    console.log("Age verification complete");
  }
}

//Task 6
const accountPatients = function (countOfFreeBeds) {
  const countOfBeds = countOfFreeBeds;
  let freeBeds = countOfFreeBeds;
  return [
    () => {
      if (freeBeds == 0) {
        console.log("Can not admit a patient, no beds available");
      } else {
        freeBeds--;
        console.log(`A patient was admitted, ${freeBeds} beds are available`);
      }
    },
    () => {
      if (freeBeds == countOfBeds) {
        console.log("There are no patients to discharge");
      } else {
        freeBeds++;
        console.log(`A patient was discharged, ${freeBeds} beds are available`);
      }
    },
  ];
};
