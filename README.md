# _Pig Latin_

#### _EPICODUS PRACTICE: w3:28 Pig latin translator_

#### By
* _**Ella Tanttu**_
* _**Liz Thomas**_

## Technologies Used

* _CSS3_
* _HTML5_
* _JAVAscript_

## Description

_See project prompt: https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-pig-latin_

## Setup/Installation Requirements

* _Navigate to https://github.com/ellajtanttu/piglatin-oct in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open pig-latin-oct/index.html in your browser_
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_MIT Copyright (c) 2021 Ella Tanttu, Liz Thomas_
_https://opensource.org/licenses/MIT_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_
_Liz Thomas thomas.elizabeth.k@gmail.com_

# TDD Cases

<!--
For words beginning with a vowel, add "way" to the end.
-- one letter that is a vowel, add way to the end
-- multiple letter word starting with vowel, add way to the end

For Pig Latin, vowels are "a," "e," "i," "o," and "u."
Don't treat "y" as a vowel.
Examples: "away" becomes "awayway" and "okay" becomes "okayway." -->

<!--
For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay".
-- function returns "cons" value if word begins with consonant
-- function loops through word to find if the second letter is a vowel or a consonant - breaks out once it hits a vowel
    -- function splits word when it finds the first vowel
    -- switching the two parts
    -- add "ay" to end
Examples: "code" becomes "odecay" and "move" becomes "ovemay." -->

<!-- If the first consonants include "qu", move the "q" and the "u."
Don't forget about words like "squeal" where "qu" doesn't come first!
-- function returns "surprise! QU" if word contains "qu"
-- if qu is at index of 0 & 1 of word, return "dfjklas;jf"
    -- function splits word: qu & rest of word
    -- switching the two parts
    -- add "ay" to end
-- if qu is at index > 0 & 1, treat as a vowel
    -- function splits word: first letter & rest of word
    -- switching the two parts
    -- add "ay" to end
Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay." -->

Functions we will need:
1. Identifier function - sorts the word type
2. Consonant function
3. Vowel Function
4. Qu function
----


Describe: pigLatin()

## Identifier Function

1. Test: "It will loop through the word and return each letter through each iteration."
Code: pigLatin("sort")
Expected Output: "s" "o" "r" "t"

1. Test: "It will return "v" if the word begins with a vowel."
Code: pigLatin("sort")
Expected Output: "v"

1. Test: "It will return "c" if the word begins with a consonant."
Code: pigLatin("sort")
Expected Output: "c"

1. Test: "It will return "qu" if word contains 'qu'"
Code: pigLatin ("queen")
Expected Output: "qu"

## Vowel Function

3. Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

## Consonant Function

1. Test: "It will loop through the word to find if the second letter is a vowel"
Code: pigLatin("tray")
Expected Output: false

1. Test: "It will loop through the word to find if the second letter is a consonant."
Code: pigLatin("tray")
Expected Output: true

2. Test: "It will loop through the word until it hits a vowel and then returns the index of the first vowel"
Code: pigLatin("tray")
Expected Output: 2

2. Test: "It will split the word at the index of the first vowel"
Code: pigLatin("tray")
Expected Output: ["tr","ay"]

2. Test: "It will switch the positions of the two parts of the word"
Code: pigLatin("tray")
Expected Output: ["ay", "tr"]

2. Test: "It will push "ay" to the end of the array"
Code: pigLatin("tray")
Expected Output: ["ay", "tr", "ay"]

2. Test: "It will join the array together and return it"
Code: pigLatin ("tray")
Expected Output: "aytray"

## QU Function

4. Test: "It will return true if "q" is at index 0 && "qu" is contained in the string"
Code: pigLatin ("queen")
Expected Output: true

4. Test: "It will split the word at the index after the 'u'"
Code: pigLatin("queen")
Expected Output: ["qu","een"]

4. Test: "It will switch the positions of the two parts of the word"
Code: pigLatin("queen")
Expected Output: ["een", "qu"]

4. Test: "It will push "ay" to the end of the array"
Code: pigLatin("queen")
Expected Output: ["een", "qu", "ay"]

4. Test: "It will join the array together and return it"
Code: pigLatin ("queen")
Expected Output: "eenquay"

4. Test: "It will return false if "q" is not at index 0 && "qu" is contained in the string"
Code: pigLatin ("squawk")
Expected Output: false

4. Test: "It will loop through the word to find if the second letter is a q."
Code: pigLatin("squawk")
Expected Output: true

4. Test: "It will loop through the word until it hits a q and then returns the index"
Code: pigLatin("squawk")
Expected Output: 2

4. Test: "It will split the word at the index of the q"
Code: pigLatin("squawk")
Expected Output: ["s","quawk"]

4. Test: "It will switch the positions of the two parts of the word"
Code: pigLatin("squawk")
Expected Output: ["quawk", "s"]

4. Test: "It will push "ay" to the end of the array"
Code: pigLatin("squawk")
Expected Output: ["quawk", "s", "ay"]

4. Test: "It will join the array together and return it"
Code: pigLatin("squawk")
Expected Output: "quawksay"

-Refactor code to separate utility logic from the rest of the business logic
-Add UI and styling