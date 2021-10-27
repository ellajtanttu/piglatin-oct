// Utility Logic:


// Business Logic:
  const wordArray = word.split("");
  const firstLetter = wordArray[0];
  const secondLetter = wordArray[1];

function wordIdentifier(word) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  let vowelLoop = '';

  for (let i = 0; i < vowelArray.length; i++ ) {
    if (firstLetter === vowelArray[i]) {
      // console.log(vowelArray[i]);
      vowelLoop = vowelArray[i];
    }
  }
    if (word.includes("qu")) {
      return "qu";
    } else if (vowelLoop === firstLetter ) {
    return "v";
    } else {
      return "c";
    }
}




// User Interface Logic:


// NOTES & BRAINSTORMING:

/*
GOAL: we need to compare our first letter to the vowels array;
Building blocks:
X - first letter
X - comparison operator (eg. ===)
X - boolean

for (let i = 0; i < vowelArray.length; i++ ) {
  if (firstLetter === vowelArray[i]) {
    return true;
  } else {
    return false;
  }
}

if (word.includes("qu")) {
  return "qu";
} else if (firstLetter === vowel) {
  return "v";
} else {
  return "c";

  // if (word.includes("qu")) {
  //   return "qu";
  // } else if (firstLetter === 1) {
  // return "v";
  // } else {
  //   return "c";
  // }

*/