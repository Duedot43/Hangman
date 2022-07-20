let wordArr = words.split(' ');
console.log(wordArr);
var randomWord = Math.floor(Math.random() * wordArr.length + 1);
let word = wordArr[randomWord].split('');
var wordStr = wordArr[randomWord];
var hangman = [];
for (var i = 0; i < word.length; i++) {
    hangman.push("-");
    //Do something
}
console.log(hangman);
console.log(word);
console.log(wordStr);
document.write('<text id="word" >' + arr2str(hangman) + '</text><br>');
document.write("<input type='text' id='guess' ><br><input type='button' value='Submit' id='submit' onclick='guessLetter()' ><br><text id='guessLeft'>" + Math.round(word.length * 1.5) + "</text> tries left!");
// Get the input field
var input = document.getElementById("guess");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit").click();
    }
});
function algor() {
    //this is turning into a PythonProgramsForHS program lol
    if (!inArray("-", hangman)) {
        document.getElementById('guess').value = "";
    }
    if (document.getElementById('guessLeft').innerText <= 0) {
        document.getElementById('guess').value = "";
        document.getElementById('word').innerText = arr2str(word);
        document.getElementById('submit').disabled = true;
    }
}
function guessLetter() {
    var guess = document.getElementById('guess').value;
    var guess = guess.split('');
    var correct = false;
    if (guess.length == word.length && guess.toLowerCase == word.toLowerCase) {
        document.getElementById('word').innerText = arr2str(word);
        return 1;
    }
    for (var i = 0; i < word.length; i++) {
        if (guess[0] == word[i]) {
            hangman[i] = word[i]
            document.getElementById('word').innerText = arr2str(hangman);
            correct = true;
        }

        //Do something
    }
    if (!correct) {
        document.getElementById('guessLeft').innerText = document.getElementById('guessLeft').innerText - 1
    }
    document.getElementById('guess').value = "";
}
function arr2str(arr) {
    var output = "";
    for (var i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
        //Do something
    }
    return output.trim();
}
function inArray(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            return true;
        }
    }
    return false;
}