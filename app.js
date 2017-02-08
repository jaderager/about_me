"use strict";

alert("Answer all questions with Y/N, please!")
for (var i = 1; i <=5; i++) {
    var promptOutput;
    switch (i) {
        case 1:
            var promptOutput = "Is or is not Jade a kitteh fanatic?";
            break;
        case 2:
            var promptOutput = "Is Jade bad at posing unprompted questions or trivia?";
            break;
        case 3:
            var promptOutput = "Does Jade like the cold?";
            break;
        case 4:
            var promptOutput = "Has Jade ever been to another country?"
            break;
        case 5:
            var promptOutput = "Is Jade getting enough sle...zzZ"
            break;
    }
    var input = prompt(promptOutput).toUpperCase();
    console.log("A" + i + ": " + input);

    if (i === 1) {
        if (input === "Y") {
            alert("Correct!");
        } else if (input === "N") {
            alert("Newp.")
        } else {
            alert("Invalid input.")
        }
    } else if (i === 2) {
        if (input === "Y") {
            alert("Correct!");
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
        } else {
            alert("Invalid input.")
        }
    } else if (i === 4) {
                if (input === "Y") {
            alert("Newp.");
        } else if (input === "N") {
            alert("Correct!")
        } else {
            alert("Invalid input.")
        }
    } else if (i === 5) {
        if (input === "Y") {
            alert("zzZ...");
        } else if (input === "N") {
            alert("zzZ...")
        } else {
            alert("zzzzZ... quit breaking my scripts...zzZ")
        }
    }
}