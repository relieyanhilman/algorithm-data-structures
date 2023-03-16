function PalindromeCreator(str) {
  const isStringPalindrome = isPalindrome(str);
  if (isStringPalindrome) return "palindrome";
  const palindrome = findPalindrome(
    [
      {
        str,
        chars: [],
      },
    ],
    2,
    0
  );
  return palindrome && palindrome.str.length > 2
    ? getRemovedCharsForPalindrome(palindrome)
    : "not possible";
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function findPalindrome(
  combinations,
  maxCharsToRemove,
  currentNumCharsRemoved
) {
  const allNewCombinations = [];
  for (let i = 0; i < combinations.length; i++) {
    const newCombinations = getCombinationsRemovingOneCharacter(
      combinations[i]
    );
    const palindrome = newCombinations.find((combination) =>
      isPalindrome(combination.str)
    );
    if (palindrome) {
      console.log("findPalindrome1st", palindrome);
      return palindrome;
    }
    allNewCombinations.push(...newCombinations);
  }
  if (currentNumCharsRemoved < maxCharsToRemove - 1) {
    const palindrome = findPalindrome(
      allNewCombinations,
      maxCharsToRemove,
      currentNumCharsRemoved + 1
    );
    if (palindrome) {
      console.log("findPalindrome2nd", palindrome);
      return palindrome;
    }
  }
}

function getCombinationsRemovingOneCharacter(combination) {
  const combinations = [];
  const { str, chars } = combination;
  for (let i = 0; i < str.length; i++) {
    combinations.push({
      str: str.slice(0, i) + str.slice(i + 1),
      chars: [
        ...chars,
        {
          char: str.slice(i, i + 1),
          index: i,
        },
      ],
    });
  }
  console.log("getCombinationRemovingOneCharacter", combinations);
  return combinations;
}

function getRemovedCharsForPalindrome(palindrome) {
  console.log(
    "getRemovedCharsForPalindrome",
    palindrome.chars
      .sort((a, b) => a.index - b.index)
      .map((char) => char.char)
      .join("")
  );

  return palindrome.chars
    .sort((a, b) => a.index - b.index)
    .map((char) => char.char)
    .join("");
}

console.log(PalindromeCreator("mmop")); // not possible
// console.log(PalindromeCreator("kjjjhjjj")); // k
// console.log(PalindromeCreator("abjchba")); // jc
