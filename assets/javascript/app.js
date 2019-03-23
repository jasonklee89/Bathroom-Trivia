// Start Button
$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
});

// invokes function(e) when answer-button is clicked
$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
});

$(document).on('click', '#reset', function() {
    game.reset();
})

// Question Array
var questions = [{
    question: "The average person uses the toilet 2,500 times per year. So over the course of an average lifetime, people spend about ______ years on the toilet!",
    answers: ["1", "3", "10", "10,000"],
    correctAnswer: "3",
    image: "assets/images/toiletclock.jpg"
}, {
    question: "_____ of people use their mobile phone on the toilet. Folks do everything from talk and text to online shopping, all from the john. It’s now more popular than reading in the bathroom!",
    answers: ["0%", "25%", "50%", "75%"],
    correctAnswer: "75%",
    image: "assets/images/bathroom.jpg"
} , {
    question: "Aaaaand somewhat predictably, ___ million phones a year fall in. SPLOOOOSH!!!",
    answers: ["7", "100", "2", "40"],
    correctAnswer: "7",
    image: "assets/images/phoneintoilet.jpg"
} , {
    question: "Americans are really on a roll… we use ____ million miles of toilet paper every year – that’s enough to stretch to the sun and back!",
    answers: ["100", "50", "900", "433"],
    correctAnswer: "433",
    image: "assets/images/toiletpaperrolls.jpg"
} , {
    question: "When it comes to gender, men and women have different bathroom pet peeves. Men’s top annoyances are makeup on the towels and _________________.",
    answers: ["leaving the toilet seat down", "hair in the sink", "hair in the shower", "toothpaste in the sink"],
    correctAnswer: "hair in the sink",
    image: "assets/images/hairinsink.jpg"
} , {
    question: "The top complaints for women were leaving the seat up (who didn’t see that one coming?), and _________________.",
    answers: ["leaving the toilet seat down", "hair in the sink", "hair in the shower", "toothpaste in the sink"],
    correctAnswer: "toothpaste in the sink",
    image: "assets/images/toothpasteinsink.jpg"
} , {
    question: "And in defense of women everywhere, putting the seat down just makes good safety sense. A full ____ of bathroom-related injuries happen when someone falls into the toilet because the seat has been left up!.",
    answers: ["10%", "30%", "75%", "85%"],
    correctAnswer: "85%",
    image: "assets/images/toiletfall.jpg"
}];

var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,
    countdown: function() {
        // Countdown from 30 seconds
        game.counter--;
        // Update to HTML
        $("#counter").html(game.counter);
        // Time's up if less than 1 second
        if (game.counter < 1) {
            console.log("Time's Up!");
            game.timeUp();
        }
    }, 
    loadQuestion: function() {
        // Countdown one number per second
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html("<h2>Time Remaining: <span id='counter'>30</span></h2>")
        // Add header for question
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");
        // Load the question while adding a data-name to store the question
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function() {
        // Reset counter to 30 seconds
        game.counter = 30;
        // Update HTML
        $('#counter').html(game.counter);
        // Move on to next question in array
        game.currentQuestion++
        // Load next question
        game.loadQuestion();
    },
    timeUp: function() {
        // Stop the timer
        clearInterval(timer);
        // Add to unanswered counter
        game.unanswered++;
        // HTML says we ran out of time
        $('#subwrapper').html('<h2>Times up, son!!</h2>');
        // Tell them the correct answer in HTML
        $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        // If last question, take to results screen.  Otherwise, load nextQuestion
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    results: function() {
        // Clearing timer
        clearInterval(timer);
        // Updating HTML to say finished and show results
        $('#subwrapper').html('<h2>Fin!!</h2>');
        $('#subwrapper').append('<h3>Correct: ' + game.correct + '</h3>');
        $('#subwrapper').append('<h3>Incorrect: ' + game.incorrect + '</h3>');
        $('#subwrapper').append('<h3>Unanswered: ' + game.unanswered + '</h3>');
        // Appending reset button
        $('#subwrapper').append('<button id="reset">RESET</button>');
    },
    clicked: function(e) {
        // Clear interval once answer is selected
        clearInterval(timer);
        // Run answeredCorrectly() if they selected correctAnswer, run answeredIncorrectly() if wrong answer selected
        if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function() {
        console.log("correct!");
        // Reset timer
        clearInterval(timer);
        // Update the correct score
        game.correct++;
        // Display Correct!! on html
        $('#subwrapper').html('<h2>Correct!!</h2>');
        // If last question, take to results screen.  Otherwise, load nextQuestion
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly: function() {
        console.log("wrong!");
        // Reset timer
        clearInterval(timer);
        // Update the correct score
        game.incorrect++;
        // Display Incorrect!! on html
        $('#subwrapper').html('<h2>Incorrect!!</h2>');
        // Display correct answer
        $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        // If last question, take to results screen.  Otherwise, load nextQuestion
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function() {
        // Reset game to start
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        // Load questions
        game.loadQuestion();
    }
};