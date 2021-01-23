//String Calculator Function: Adds all numbers (separated by non-number delimiters) in a string

export const Add = (string) => {
  //Cases for empty string & single number string
  if (!string.length) {
    return 0;
  }
  //handles a string that is a single number
  if (!string.includes(",") && !string.includes("//")) {
    //makes sure single number is less than 1000
    if (parseInt(string) < 1000) {
      return parseInt(string);
    } else {
      return 0;
    }
  }

  //if the string contains the control code beginning, replace the possible custom delimiters
  if (string.substring(0, 2) == "//") {
    //remove slashes
    string = string.substring(2);
    //Replace any non-numbers (except for hyphens which determine negatives) with a comma. Then replace multiple commas in a row with a single comma
    string = string.replace(/[^0-9\-]/g, ",").replace(/\,+/gm, ",");
  }
  //Turn the string into an array of integers
  const numsArray = string.split(",").map((num) => parseInt(num));

  //Check for negative numbers. If there are negatives, return all negative numbers in the string
  if (numsArray.some((num) => num < 0)) {
    return `Negatives not allowed. Negatives: ${numsArray.filter((num) => {
      return num < 0;
    })}`;
  }

  //ignores numbers greater than 1000 (& NaN)
  let filteredArray = numsArray.filter((num) => {
    return num <= 1000;
  });

  //adds all of the numbers in the array and returns the result
  return filteredArray.reduce((a, b) => a + b, 0);
};
