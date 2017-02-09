"use strict";

//make sure user has option to skip dialogues
var userOptIn = prompt("Would you like to play a game? Y/N").toUpperCase();
if (userOptIn === "Y") {
    alert("Answer all questions with Y/N, please!");
    var questionsCorrect = 0;
    for (var i = 1; i <=5; i++) {
        var promptOutput;
        if (i === 1) {
            var promptOutput = "Is or is not Jade a kitteh fanatic?";
        } else if (i === 2) {
            var promptOutput = "Is Jade bad at posing unprompted questions or trivia?";
        } else if (i === 3) {
            var promptOutput = "Does Jade like the cold?";
        } else if (i === 4) {
            var promptOutput = "Has Jade ever been to another country?"
        } else if (i === 5) {
            var promptOutput = "Is Jade getting enough sle...zzZ"
        }

        var input = prompt(promptOutput).toUpperCase();
        console.log("A" + i + ": " + input);

        if (i === 1) {
            if (input === "Y") {
                alert("Correct!");
                questionsCorrect++;
            } else if (input === "N") {
                alert("Newp.")
            } else {
                alert("Invalid input.")
            }
        } else if (i === 2) {
            if (input === "Y") {
                alert("Correct!");
                questionsCorrect++;
            } else if (input === "N") {
                alert("Newp.")
            } else {
                alert("Invalid input.")
            }
        } else if (i === 3) {
            if (input === "Y") {
                alert("Newp.");
            } else if (input === "N") {
                alert("Correct!")
                questionsCorrect++;
            } else {
                alert("Invalid input.")
            }
        } else if (i === 4) {
            if (input === "Y") {
                alert("Newp.");
            } else if (input === "N") {
                alert("Correct!")
                questionsCorrect++
            } else {
                alert("Invalid input.")
            }
        } else if (i === 5) {
            if (input === "Y") {
                alert("zzZ...");
            } else if (input === "N") {
                alert("zzZ...")
                questionsCorrect++
            } else {
                alert("zzzzZ... quit breaking my scripts...zzZ")
            }
        }
    }
    userOptIn = "6"; //advance execution
}

if (userOptIn === "6") { //debug feature; jump to 6th question

    for (var i = 1; i <= 4; i++) {
        var userNumGuess = parseInt(prompt("Guess Jade's favorite number!"));
        if (userNumGuess < 23) {
            alert("Too small...");
        } else if (userNumGuess > 23) {
            alert("Too great...")
        } else if (userNumGuess === 23) {
            alert("You guessed it! Jade's 23rd birthday has been a quiet affair, but is the most significant!")
            questionsCorrect++;
            var fourthInputCorrect = true;
            break;
        }
    }
    if (!fourthInputCorrect) {
        alert("You ran out of guesses! *sad trombone*");
    }
userOptIn = "7"; //advance execution
}

if (userOptIn === "7") { //debug feature; jump to 7th question

    var seventhQAnswers = ["PINEAPPLE","WATERMELON","GRAPEFRUIT","MANGO","BLUEBERRY"];

    for (var i = 1; i <= 6; i++) {
        var userQ7Input = prompt("Guess one of Jade's favorite fruits! All answers in singular form. You have six tries!").toUpperCase();

        for (var j = 0; j < seventhQAnswers.length; j++) {
            if (seventhQAnswers[j] === userQ7Input) {
                var seventhQHit = true;
                break;
            } else {
                var seventhQHit = false;
            }
        }

        if (seventhQHit === true) {
            alert("You guessed correctly!");
            questionsCorrect++
            alert(seventhQAnswers);
            break;
        }
    }
    if (seventhQHit === false) {
        alert("You ran out of guesses! *sad trombone*")
        alert(seventhQAnswers);
    }

    alert("You got " + questionsCorrect + " questions correct out of 7!");
}