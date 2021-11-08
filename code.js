function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    // It returns a random number from (inclusive)-1 (exclusive), rolling the dice twice.

    var sum = die1 + die2;
    // This adds the sum of the two numbers randomly generated.

    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "Sum = " + sum;
    // Display the values of the dice and the sum.

    if (sum == 7 || sum == 11) {
        loss = loss + 1;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "CRAPS - You Lose!";
        // If what ever in Parenthises is true, then you do the stuff in brakets.   
    }

    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("winRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - You Win!";
        wins = wins + 1;
        // If you take a number and divide it by 2 and the remainder is 0 then it is true.
    }

    else {
        tie = tie + 1;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML =
            "Draw - You neither won nor lost. Please try again.";
        // If you nether win or lose you are asked nicely to try again.
    }

}

function blastOff() {
    var currTime = 50;
    function startTimer() {
        document.getElementById("countdownTimer").innerHTML = currTime;
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 5000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 10000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 15000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 20000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 25000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 30000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 35000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 40000);
        setTimeout(function () {
            currTime = currTime - 5;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 45000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 46000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 47000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 48000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 49000);
        setTimeout(function () {
            currTime = currTime - 1;
            document.getElementById("countdownTimer").innerHTML = "Blastoff!";
        }, 50000);
    }
}

function btrBlastoff() {
    console.log("brtBlastoff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            if (currTime >= 25) {
                //if conditions are true
                document.getElementById("countdownTimer").innerHTML = currTime;
            } else if(currTime == 0){
                //if else if conditions are true 
                document.getElementById("countdownTimer").innerHTML = "Blastoff!";
            } else {
                //if conditons are not true
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, i * 5000);
    }
}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound ("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function playBowie() {
    console.log("playBowie() started");
    mySound = new sound("Space_Oddity.mp3");
    mySound.play();
}