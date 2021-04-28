const pangramMainFunc = () => {
  let { value: input } = document.getElementById("pangram");

  const pangramTester = str => {
    // Validates the input contains only US-ASCII characters
    let ascii = /^[ -~]+$/;
    if (!ascii.test(str)) {
      return "BAD INPUT";
    }
    // Sets input to lower case and splits each letter into an element of an array
    const strArr = str.toLowerCase().split("");

    // Creates an array of all letters of the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabet.split("");

    // Removes letter/s from alphabet array if they match input letter/s
    strArr.forEach(letter => {
      const letterInd = alphabetArr.indexOf(letter);
      letterInd >= 0 && alphabetArr.splice(letterInd, 1);
    });

    // Returns all non-matching letters from alphabet array if input is not a pangram
    if (alphabetArr.length) {
      return alphabetArr.join("");
    }
    // Returns PANGRAM if input is a pangram
    return "PANGRAM";
  };
  document.getElementById("outputLabel").innerHTML = "result:";
  document.getElementById("output").innerHTML = pangramTester(input);
};
