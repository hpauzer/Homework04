/*        <!--
1.  Onkeyup or .event to kickoff step 2
2.  Random number generated at start of game (19-120)
3.  Print number to html.
4.  4 crytlals, each assigned a number--this will be defining, no function until called (make function=crystValue)
5.  Add crystal value to total score when clicked on--crystal.on(click) crystValue, step 6
6.  "Your total score" var total = total + crystal clicked
7.  Compare score to random number
8. If total === randome number, "you won", add +1 to Wins:
    Else, if score is less than random number, (onekeyup or .event) start again at step one.
    Else, if score is greater than random number, "you lose", add +1 to losses.
    If losses greatner than 3, "Game Over", reset ALL scores to 0
    Else start again at step 1.

At beginning, assign crystal array, hold onto random number (console.log crystal value) 1-12 range of random numbers.*/

$(document).ready(function () {

        //global variables

        var blue;
        var green;
        var white;
        var purple;
        var start;
        var numberGen;
        var totalScore;

    }
    //function to reset game
    function initializeGame() {
        blue = 0;
        green = 0;
        white = 0;
        purple = 0;
        numberGen = 0;
        totalScore = 0;


        $("#blue, #green, #white, #purple, .total-score").empty();
    }

    //On click listener to start game.//
    $(".start").on("click", function () {

        $(numberGen) = 19 + Math.floor(Math.random() * 120);
        console.log("numberGen = " + numberGen);
        $(".number.Gen").html(numberGen);

        //Click listner applied to elements with class "thumbnail" aka gem images.
        var gem = $(".thumbnail").on("click", function () {

            if (gem === "#blue") {
                blue = 1 + Math.floor(Math.random() * 12);
                console.log("blue = " + gem);
                totalScore = (blue + totalScore);
            } else if (gem === "#green") {
                green = 1 + Math.floor(Math.random() * 12);
                console.log("green = " + gem);
                totalScore = (green + totalScore);

            } else if (gem === "#purple") {
                purple = 1 + Math.floor(Math.random() * 12);
                console.log("purple = " + gem);
                totalScore = (purple + totalScore);

            } else(gem === "#white") {
                white = 1 + Math.floor(Math.random() * 12);
                console.log("white = " + gem);
                totalScore = (white + totalScore);

                var play =
                    If(totalScore === numberGen) {
                        alert("You won!");
                        initializeGame();
                        //reset

                    }
                else if (totalScore > numberGen) {
                    alert("You lost. Press start to play again.");
                    initializeGame();
                    //reset
                } else() {
                    gem = $(".thumbnail").on("click", function ()

                        if (gem === "#blue") {
                            console.log("blue = " + gem);
                            totalScore = (blue + totalScore);

                        } else if (gem === "#green") {
                            console.log("green = " + gem);
                            totalScore = (green + totalScore);

                        } else if (gem === "#purple") {
                            console.log("purple = " + gem);
                            totalScore = (purple + totalScore);

                        } else(gem === "#white") {
                            white = 1 + Math.floor(Math.random() * 12);
                            console.log("white = " + gem);
                            totalScore = (white + totalScore);



                        }
                        $(total - Score).html(totalScore);
                    }

                })

        })


    })
)
