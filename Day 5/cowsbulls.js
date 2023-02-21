var scores = []
var original = [];
var guess = [];
function get_compare() {
    var score = {
        cows: 0,
        bulls: 0
    }
    original = document.getElementById("ori_txt").value;
    guess = document.getElementById("guess_txt").value;
    for (var i = 0; i < original.length; i++) {
        if (original[i] == guess[i]) {
            score.cows += 1;
        }
    }
    for (i = 0; i < original.length; i++) {
        for (var j = 0; j < guess.length; j++) {
            if (i == j)
                continue;
            if (original[i] == guess[j]) {
                score.bulls += 1;
            }
        }
    }
    console.log(score);
    scores.push(score);
    if (score.cows == original.length) {
        var myDiv = document.getElementById("msgDiv");
        myDiv.innerHTML = "You won!!! The original word is " + original;
        console.log("The final sets:")
        for (var i = 0; i < scores.length; i++) {
            console.log(scores[i]);
        }
    }
    
}